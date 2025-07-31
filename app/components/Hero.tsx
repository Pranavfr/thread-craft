'use client'

import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="x-hero px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
            Create Viral Tweet Threads
            <span className="block text-[#1da1f2]">with AI</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into engaging tweet threads that go viral. 
            Powered by advanced AI to help you craft compelling content in seconds.
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <div className="flex flex-col items-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#1da1f2] mb-3" />
            <h3 className="font-semibold text-black dark:text-white mb-2 text-sm sm:text-base">
              AI-Powered
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center">
              Advanced AI generates engaging content
            </p>
          </div>

          <div className="flex flex-col items-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 mb-3" />
            <h3 className="font-semibold text-black dark:text-white mb-2 text-sm sm:text-base">
              Viral Potential
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center">
              Optimized for maximum engagement
            </p>
          </div>

          <div className="flex flex-col items-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500 mb-3" />
            <h3 className="font-semibold text-black dark:text-white mb-2 text-sm sm:text-base">
              Lightning Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center">
              Generate threads in seconds
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#1da1f2] hover:bg-[#1a8cd8] text-white font-semibold px-8 py-4 sm:px-10 sm:py-4 rounded-lg text-lg transition-colors duration-200 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Start Creating
          </button>
          <button
            onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold px-8 py-4 sm:px-10 sm:py-4 rounded-lg text-lg transition-colors duration-200"
          >
            View Examples
          </button>
        </motion.div>
      </div>
    </section>
  )
} 