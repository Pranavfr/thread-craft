'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, HelpCircle, BookOpen, MessageCircle, Mail, Github, Twitter } from 'lucide-react'

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export default function Help() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const faqs: FAQ[] = [
    {
      id: 'how-to-use',
      question: 'How do I use ThreadCraft?',
      answer: 'Simply enter your topic, choose a tone (Casual, Funny, Educational, or Viral), select the number of tweets you want (5, 10, or 15), and click "Generate Thread". The AI will create a viral tweet thread for you.',
      category: 'Getting Started'
    },
    {
      id: 'character-limit',
      question: 'What\'s the character limit for tweets?',
      answer: 'Each tweet is limited to 280 characters, just like on X (Twitter). The app will show you a character count as you type, with warnings when you approach the limit.',
      category: 'Features'
    },
    {
      id: 'templates',
      question: 'How do templates work?',
      answer: 'Templates provide proven structures for different types of threads. Choose a template like "Viral Thread" or "Educational Thread" to get a pre-written prompt that you can customize with your topic.',
      category: 'Features'
    },
    {
      id: 'copy-tweets',
      question: 'How do I copy and share my tweets?',
      answer: 'After generating a thread, each tweet will have "Copy" and "Tweet" buttons. Click "Copy" to copy the tweet to your clipboard, or "Tweet" to open X (Twitter) with the tweet pre-filled.',
      category: 'Features'
    },
    {
      id: 'best-practices',
      question: 'What are the best practices for viral threads?',
      answer: 'Start with a hook, use storytelling, include emojis and hashtags, make each tweet valuable, end with a call-to-action, and keep your audience engaged throughout the thread.',
      category: 'Tips'
    },
    {
      id: 'api-errors',
      question: 'What if I get an error generating threads?',
      answer: 'If you encounter rate limit errors, wait a moment and try again. For other issues, check your internet connection and ensure you\'re not exceeding the API limits.',
      category: 'Troubleshooting'
    }
  ]

  const tips = [
    {
      title: 'Start with a Hook',
      description: 'Your first tweet should grab attention immediately. Use questions, surprising facts, or bold statements.',
      icon: '🎣'
    },
    {
      title: 'Tell a Story',
      description: 'Structure your thread like a story with a beginning, middle, and end. Keep readers wanting more.',
      icon: '📖'
    },
    {
      title: 'Use Visual Breaks',
      description: 'Include emojis, line breaks, and formatting to make your tweets easy to read and visually appealing.',
      icon: '✨'
    },
    {
      title: 'End with Action',
      description: 'Always end your thread with a call-to-action. Ask a question, encourage engagement, or direct to your next content.',
      icon: '🎯'
    }
  ]

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
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
            Help & Support
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about creating viral tweet threads
          </p>
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Quick Tips for Viral Threads
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h4 className="font-semibold text-black dark:text-white mb-2">
                  {tip.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-1">
                      {faq.question}
                    </h4>
                    <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
            Need More Help?
          </h3>
          <div className="flex items-center justify-center">
            <a
              href="mailto:codesentinel.tech@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 