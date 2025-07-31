'use client'

import { motion } from 'framer-motion'
import { Copy, Share2, Check, Twitter, ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface ThreadOutputProps {
  tweets: string[]
}

export default function ThreadOutput({ tweets }: ThreadOutputProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [copiedAll, setCopiedAll] = useState(false)

  const copyToClipboard = async (text: string, index?: number) => {
    try {
      await navigator.clipboard.writeText(text)
      if (index !== undefined) {
        setCopiedIndex(index)
        setTimeout(() => setCopiedIndex(null), 2000)
      } else {
        setCopiedAll(true)
        setTimeout(() => setCopiedAll(false), 2000)
      }
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const copyAllThread = async () => {
    const fullThread = tweets.join('\n\n')
    await copyToClipboard(fullThread)
  }

  const postToX = (tweet: string, index: number) => {
    const encodedTweet = encodeURIComponent(tweet)
    const xUrl = `https://twitter.com/intent/tweet?text=${encodedTweet}`
    window.open(xUrl, '_blank')
  }

  const postAllToX = () => {
    const fullThread = tweets.join('\n\n')
    const encodedThread = encodeURIComponent(fullThread)
    const xUrl = `https://twitter.com/intent/tweet?text=${encodedThread}`
    window.open(xUrl, '_blank')
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">
            Generated Thread
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {tweets.length} tweets ready to share
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={copyAllThread}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
          >
            {copiedAll ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy All
              </>
            )}
          </button>

          <button
            onClick={postAllToX}
            className="flex items-center gap-2 px-4 py-2 bg-[#1da1f2] hover:bg-[#1a8cd8] text-white rounded-lg text-sm font-medium transition-colors duration-200"
          >
            <Twitter className="w-4 h-4" />
            Post All to X
          </button>
        </div>
      </div>

      {/* Tweets */}
      <div className="space-y-4">
        {tweets.map((tweet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="x-card"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-black dark:text-white text-sm">
                    ThreadCraft
                  </span>
                  <span className="text-gray-500 text-sm">
                    @threadcraft
                  </span>
                </div>

                <p className="text-black dark:text-white text-base leading-relaxed mb-3">
                  {tweet}
                </p>

                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => copyToClipboard(tweet, index)}
                    className="flex items-center gap-1 px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => postToX(tweet, index)}
                    className="flex items-center gap-1 px-3 py-1.5 text-[#1da1f2] hover:text-[#1a8cd8] rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    <Twitter className="w-4 h-4" />
                    Post to X
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-6"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Quick Actions:</strong> Copy individual tweets or post directly to X
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={copyAllThread}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              <Copy className="w-4 h-4" />
              Copy All Thread
            </button>
            
            <button
              onClick={postAllToX}
              className="flex items-center gap-2 px-4 py-2 bg-[#1da1f2] hover:bg-[#1a8cd8] text-white rounded-lg text-sm font-medium transition-colors duration-200"
            >
              <Twitter className="w-4 h-4" />
              Post All to X
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 