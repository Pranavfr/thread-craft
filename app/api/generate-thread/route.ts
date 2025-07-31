import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// Initialize OpenRouter (compatible with OpenAI SDK)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
})

export async function POST(request: NextRequest) {
  try {
    const { description, topic, tone, length, threadStyle } = await request.json()

    if (!topic) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create the prompt for OpenRouter
    const titleContext = description ? `Title: ${description}\n` : ''
    const characterLimit = threadStyle === 'short' ? 200 : 280
    
    const prompt = `You are an expert viral tweet thread creator. Create a compelling, high-quality tweet thread about "${topic}" with a ${tone.toLowerCase()} tone.

${titleContext}
CRITICAL REQUIREMENTS:
- Generate exactly ${length} tweets
- Each tweet MUST be substantial and valuable
- ${threadStyle === 'long' ? 'Use 250-280 characters per tweet for comprehensive content' : 'Use 180-200 characters per tweet for concise impact'}
- Make each tweet feel complete and standalone
- Include specific examples, data points, statistics, or actionable insights
- Use storytelling techniques with hooks, development, and conclusions
- Include relevant hashtags and emojis strategically
- Create a cohesive narrative that flows naturally
- Start with a powerful hook that grabs attention
- Build momentum through the middle tweets
- End with a strong call-to-action or key takeaway
- Make it educational, entertaining, and shareable
- Use the ${tone} tone consistently throughout

CONTENT QUALITY REQUIREMENTS:
- Each tweet should provide real value and insight
- Include specific facts, examples, or actionable advice
- Use data points, statistics, or concrete examples where relevant
- Make complex topics accessible and engaging
- Include personal insights or unique perspectives
- Use analogies or metaphors to explain concepts
- Create emotional connection with the audience
- Include "aha moments" or surprising insights
- Make it feel like insider knowledge or expert advice

STRUCTURE REQUIREMENTS:
- Tweet 1: Compelling hook + initial insight
- Middle tweets: Develop the story with examples, data, insights
- Final tweet: Strong conclusion + call-to-action
- Each tweet should build on the previous one
- Create anticipation for the next tweet
- Use cliffhangers and teasers strategically

FORMAT: Return ONLY a valid JSON array of strings, no additional text:
[
  "First tweet content here...",
  "Second tweet content here...",
  "Third tweet content here..."
]

Remember: Quality over quantity. Each tweet should be substantial and valuable. Use the full character limit effectively.`

    // Generate content using OpenRouter
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo", // OpenRouter model format
      messages: [
        {
          role: "system",
          content: `You are a master viral tweet thread creator with expertise in creating engaging, high-quality content that goes viral.

Your expertise includes:
- Creating compelling hooks that grab attention immediately
- Developing substantial content that provides real value
- Using storytelling techniques to maintain engagement
- Incorporating specific examples, data, and insights
- Crafting tweets that feel complete and valuable
- Using the full character limit effectively (${characterLimit} chars for ${threadStyle} style)
- Creating cohesive narratives that flow naturally
- Ending with strong calls-to-action or key takeaways

Quality standards:
- Each tweet must be substantial and provide real value
- Include specific examples, data points, or actionable insights
- Use storytelling techniques with clear structure
- Make complex topics accessible and engaging
- Create emotional connection with the audience
- Include relevant hashtags and emojis strategically
- Maintain consistent tone throughout
- Use the full character limit for maximum impact

Focus on creating content that people want to share and engage with.`
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7, // Slightly lower for more consistent quality
      max_tokens: 3000, // Increased for longer, higher quality content
    })

    const text = completion.choices[0]?.message?.content || ''

    // Parse the JSON response
    let thread: string[]
    try {
      // Extract JSON from the response (in case there's extra text)
      const jsonMatch = text.match(/\[[\s\S]*\]/)
      if (jsonMatch) {
        thread = JSON.parse(jsonMatch[0])
      } else {
        // Fallback: split by newlines and clean up
        thread = text
          .split('\n')
          .filter(line => line.trim().length > 0)
          .map(line => line.replace(/^\d+\.\s*/, '').trim())
          .filter(line => line.length > 0 && line.length <= 280)
      }
    } catch (parseError) {
      console.error('Error parsing OpenRouter response:', parseError)
      // Fallback: create a simple thread
      thread = [
        `Here's what I know about ${topic}...`,
        `The key insights are...`,
        `This is important because...`,
        `Here's how you can apply this...`,
        `The bottom line is...`
      ].slice(0, length)
    }

    // Ensure we have the right number of tweets
    if (thread.length > length) {
      thread = thread.slice(0, length)
    } else if (thread.length < length) {
      // Pad with additional tweets if needed
      while (thread.length < length) {
        thread.push(`Additional insight about ${topic}...`)
      }
    }

    return NextResponse.json({ thread })

  } catch (error: any) {
    console.error('Error generating thread:', error)
    
    // Handle rate limit errors specifically
    if (error.message && error.message.includes('429')) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded. Please wait a moment and try again.',
          details: 'You have exceeded the rate limits for OpenRouter API.'
        },
        { status: 429 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to generate thread' },
      { status: 500 }
    )
  }
} 