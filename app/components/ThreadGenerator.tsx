'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Sparkles, Edit3, AlertCircle, Info, ArrowLeft, FileText, HelpCircle, Star } from 'lucide-react'
import ThreadOutput from './ThreadOutput'

interface ThreadData {
  description: string
  topic: string
  tone: string
  length: number
  threadStyle: 'short' | 'long'
}

export default function ThreadGenerator() {
  const [threadData, setThreadData] = useState<ThreadData>({
    description: '',
    topic: '',
    tone: 'Casual',
    length: 5,
    threadStyle: 'short'
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedThread, setGeneratedThread] = useState<string[]>([])
  const [showOutput, setShowOutput] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const tones = ['Casual', 'Funny', 'Educational', 'Viral']
  const lengths = [5, 10, 15]
  const threadStyles = [
    { value: 'short', label: 'Short & Punchy', description: 'Quick, impactful tweets under 200 chars' },
    { value: 'long', label: 'Long & Detailed', description: 'Comprehensive threads with full context' }
  ]

  const handleGenerate = async () => {
    if (!threadData.topic.trim()) return

    setIsGenerating(true)
    setShowOutput(false)
    setError(null)

    try {
      const response = await fetch('/api/generate-thread', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(threadData),
      })

      if (response.ok) {
        const data = await response.json()
        setGeneratedThread(data.thread)
        setShowOutput(true)
      } else {
        const errorData = await response.json()
        if (response.status === 429) {
          setError('Rate limit exceeded. Please wait a moment and try again.')
        } else {
          setError(errorData.error || 'Failed to generate thread')
        }
      }
    } catch (error) {
      console.error('Error generating thread:', error)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleMakeChanges = () => {
    setShowOutput(false)
    // Scroll to the top of the generator section
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })
  }

  const charCount = threadData.topic.length
  const maxChars = 280
  const isOverLimit = charCount > maxChars

  return (
    <section className="x-container px-4 sm:px-6">
      <div className="x-header mb-6">
        <div className="flex items-center gap-3">
          <div className="x-avatar">
            <Edit3 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-black dark:text-white">Create Thread</h2>
            <p className="text-gray-500 text-sm">Generate viral tweet threads</p>
          </div>
        </div>
      </div>

      {/* Section Navigation Indicators */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            <FileText className="w-4 h-4" />
            Templates
          </button>
          <button
            onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            <Star className="w-4 h-4" />
            Examples
          </button>
          <button
            onClick={() => document.getElementById('help')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            <HelpCircle className="w-4 h-4" />
            Help
          </button>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {/* Main Compose Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="x-compose"
        >
          <div className="x-compose-header">
            <div className="x-avatar">
              TC
            </div>
            <div className="flex-1 space-y-3 sm:space-y-4">
              {/* Description Input */}
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                  Title (Optional)
                </label>
                <textarea
                  value={threadData.description}
                  onChange={(e) => setThreadData({ ...threadData, description: e.target.value })}
                  placeholder="Brief description of your content"
                  className="x-compose-textarea min-h-[60px] text-sm w-full"
                  rows={2}
                  maxLength={200}
                />
              </div>

              {/* Main Topic Input */}
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                  Brief Description (Must)
                </label>
                <textarea
                  value={threadData.topic}
                  onChange={(e) => setThreadData({ ...threadData, topic: e.target.value })}
                  placeholder="What's your main topic or story?"
                  className="x-compose-textarea min-h-[80px] w-full"
                  rows={3}
                  maxLength={maxChars}
                />
              </div>
            </div>
          </div>

          {/* Compose Actions */}
          <div className="x-compose-actions">
            {/* Character Count */}
            <div className={`x-char-count ${isOverLimit ? 'error' : charCount > maxChars * 0.8 ? 'warning' : ''}`}>
              {charCount}/{maxChars}
            </div>
          </div>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 sm:p-4"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
              <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
            </div>
          </motion.div>
        )}

        {/* Thread Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="x-form"
        >
          <div className="space-y-4 sm:space-y-6">
            {/* Thread Style Selection */}
            <div>
              <label className="block text-sm font-semibold text-black dark:text-white mb-3">
                Thread Style
              </label>
              <div className="space-y-3">
                {threadStyles.map((style) => (
                  <button
                    key={style.value}
                    onClick={() => setThreadData({ ...threadData, threadStyle: style.value as 'short' | 'long' })}
                    className={`w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      threadData.threadStyle === style.value
                        ? 'border-[#1da1f2] bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="font-semibold text-black dark:text-white mb-1">
                      {style.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {style.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tone and Length Selection */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                  Tone
                </label>
                <select
                  value={threadData.tone}
                  onChange={(e) => setThreadData({ ...threadData, tone: e.target.value })}
                  className="x-select w-full text-base py-3 min-h-[48px]"
                >
                  {tones.map((tone) => (
                    <option key={tone} value={tone}>
                      {tone}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                  Thread length
                </label>
                <select
                  value={threadData.length}
                  onChange={(e) => setThreadData({ ...threadData, length: parseInt(e.target.value) })}
                  className="x-select w-full text-base py-3 min-h-[48px]"
                >
                  {lengths.map((length) => (
                    <option key={length} value={length}>
                      {length} tweets
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* X Character Limit Info */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 sm:p-4">
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>X Character Limits:</strong> Free users can post up to 280 characters per tweet. 
                  {threadData.threadStyle === 'short' ? ' Short style keeps tweets under 200 chars for better engagement.' : ' Long style uses full 280 chars for detailed content.'}
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <motion.button
              onClick={handleGenerate}
              disabled={isGenerating || !threadData.topic.trim() || isOverLimit}
              className="x-button w-full text-base sm:text-lg py-3 sm:py-4 min-h-[48px]"
              whileHover={{ scale: isGenerating ? 1 : 1.02 }}
              whileTap={{ scale: isGenerating ? 1 : 0.98 }}
            >
              {isGenerating ? (
                <div className="x-loading">
                  <Loader2 className="x-spinner" />
                  Generating Thread...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  Generate Thread
                </div>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Output Section */}
        {showOutput && generatedThread.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <ThreadOutput tweets={generatedThread} />
            
            {/* Make Changes Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex justify-center"
            >
              <button
                onClick={handleMakeChanges}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Make Changes
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
} 