'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Copy, Twitter, Heart, MessageCircle, Repeat, Eye } from 'lucide-react'

interface Example {
  id: string
  title: string
  topic: string
  tweets: string[]
  stats: {
    likes: number
    retweets: number
    replies: number
    views: number
  }
  category: string
}

export default function Examples() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const examples: Example[] = [
    {
      id: 'productivity-tips',
      title: '10 Productivity Hacks That Actually Work',
      topic: 'Productivity tips for remote workers',
      category: 'Productivity',
      tweets: [
        "🧵 10 productivity hacks that helped me 10x my output while working remotely:\n\n(These actually work, not just theory)",
        "1. The 2-minute rule\n\nIf something takes less than 2 minutes, do it immediately.\n\nDon't add it to your todo list.\n\nThis alone cleared 30% of my daily tasks.",
        "2. Time blocking with buffer\n\nSchedule 50-minute blocks with 10-minute buffers.\n\nLife happens. Meetings run over.\n\nBuffer time prevents your entire day from derailing.",
        "3. The 'Eat the frog' method\n\nDo your hardest task first thing in the morning.\n\nYour willpower is highest then.\n\nEverything else feels easier after.",
        "4. Batch similar tasks\n\nGroup emails, calls, and admin work together.\n\nContext switching kills productivity.\n\nYour brain needs time to 'warm up' for each type of task.",
        "5. Use the Pomodoro technique\n\n25 minutes focused work + 5 minutes break.\n\nYour brain can't maintain focus for hours.\n\nShort breaks actually increase total output.",
        "6. Create a 'done' list\n\nTrack what you accomplish, not just what you plan.\n\nMotivation comes from seeing progress.\n\nCelebrate small wins daily.",
        "7. The 80/20 rule\n\n20% of your efforts produce 80% of your results.\n\nIdentify your high-impact activities.\n\nFocus there. Delegate or eliminate the rest.",
        "8. Use templates for repetitive tasks\n\nEmail templates, meeting agendas, project briefs.\n\nDon't reinvent the wheel every time.\n\nSave hours weekly.",
        "9. Set up your environment\n\nRemove distractions. Have everything you need within reach.\n\nEnvironment shapes behavior more than willpower.",
        "10. Track your energy levels\n\nSchedule important work during your peak hours.\n\nSave admin tasks for low-energy periods.\n\nWork with your natural rhythms, not against them.",
        "Bonus: The most important productivity hack?\n\nTaking care of yourself.\n\nSleep, exercise, nutrition.\n\nYou can't optimize a system that's broken.\n\nTake breaks. Move your body. Eat well.",
        "These aren't just tips—they're systems that compound over time.\n\nStart with 2-3 that resonate with you.\n\nBuild the habit, then add more.\n\nYour future self will thank you. 🙏"
      ],
      stats: {
        likes: 2847,
        retweets: 892,
        replies: 156,
        views: 125000
      }
    },
    {
      id: 'startup-lessons',
      title: 'What I Learned Building a $1M Startup',
      topic: 'Startup lessons and insights',
      category: 'Business',
      tweets: [
        "🧵 What I learned building a $1M startup from scratch:\n\n(Thread that changed my life)",
        "1. Start with a problem you personally have\n\nDon't build for hypothetical users.\n\nBuild for yourself first.\n\nIf you don't use it daily, why would anyone else?",
        "2. Launch before you're ready\n\nPerfect is the enemy of done.\n\nGet feedback early and often.\n\nYour first version will be wrong anyway.",
        "3. Focus on one thing\n\nDon't try to be everything to everyone.\n\nPick one problem and solve it exceptionally well.\n\nYou can expand later.",
        "4. Talk to your customers\n\nEvery. Single. Day.\n\nNot surveys. Real conversations.\n\nThey'll tell you what to build next.",
        "5. Price your product correctly\n\nDon't compete on price.\n\nCharge what it's worth.\n\nYour customers will respect you more.",
        "6. Build in public\n\nShare your journey, wins, and losses.\n\nYou'll attract customers, partners, and opportunities.\n\nTransparency builds trust.",
        "7. Focus on revenue, not funding\n\nRevenue is the best form of validation.\n\nIt proves people will pay for your solution.\n\nFunding follows revenue.",
        "8. Hire slowly, fire quickly\n\nBad hires cost more than you think.\n\nCulture is everything.\n\nProtect it fiercely.",
        "9. Measure everything\n\nWhat gets measured gets improved.\n\nTrack the metrics that matter.\n\nIgnore vanity metrics.",
        "10. Stay healthy\n\nYour business is only as strong as you are.\n\nExercise, sleep, and relationships matter.\n\nDon't sacrifice health for success.",
        "The biggest lesson?\n\nSuccess is a marathon, not a sprint.\n\nFocus on sustainable growth.\n\nBuild something that lasts.\n\nYour future self will thank you. 🚀"
      ],
      stats: {
        likes: 3421,
        retweets: 1247,
        replies: 203,
        views: 189000
      }
    }
  ]

  const copyExample = (example: Example) => {
    const text = example.tweets.join('\n\n')
    navigator.clipboard.writeText(text)
  }

  return (
    <section className="x-container border-t border-gray-200 dark:border-gray-800">
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Thread Examples
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how successful threads are structured and get inspired for your own content
          </p>
        </motion.div>

        <div className="space-y-8">
          {examples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6"
            >
              {/* Example Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    {example.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Topic: {example.topic}
                  </p>
                  <span className="inline-block mt-2 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                    {example.category}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => copyExample(example)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    Copy
                  </button>
                </div>
              </div>

              {/* Stats */}
                                              <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                   <div className="flex items-center gap-1">
                     <Heart className="w-4 h-4" />
                     <span>{isClient ? example.stats.likes.toLocaleString('en-US') : example.stats.likes.toString()}</span>
                   </div>
                   <div className="flex items-center gap-1">
                     <Repeat className="w-4 h-4" />
                     <span>{isClient ? example.stats.retweets.toLocaleString('en-US') : example.stats.retweets.toString()}</span>
                   </div>
                   <div className="flex items-center gap-1">
                     <MessageCircle className="w-4 h-4" />
                     <span>{isClient ? example.stats.replies.toLocaleString('en-US') : example.stats.replies.toString()}</span>
                   </div>
                   <div className="flex items-center gap-1">
                     <Eye className="w-4 h-4" />
                     <span>{isClient ? example.stats.views.toLocaleString('en-US') : example.stats.views.toString()}</span>
                   </div>
                 </div>

              {/* Thread Preview */}
              <div className="space-y-3">
                {example.tweets.slice(0, 3).map((tweet, tweetIndex) => (
                  <div key={tweetIndex} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {tweet.length > 150 ? `${tweet.substring(0, 150)}...` : tweet}
                    </p>
                  </div>
                ))}
                {example.tweets.length > 3 && (
                  <div className="text-center text-gray-500 text-sm">
                    +{example.tweets.length - 3} more tweets
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 