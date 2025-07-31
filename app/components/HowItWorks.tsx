'use client'

import { motion } from 'framer-motion'
import { Edit3, Sparkles, Share2 } from 'lucide-react'

const steps = [
  {
    icon: Edit3,
    title: 'Enter',
    description: 'Type your topic, idea, or URL',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Sparkles,
    title: 'Generate',
    description: 'AI crafts your viral thread',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Share2,
    title: 'Post',
    description: 'Share your thread instantly',
    color: 'from-green-500 to-green-600'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="x-container border-t border-gray-200 dark:border-gray-800">
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Three simple steps to create viral tweet threads
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-700 z-0" />
              )}

              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 font-bold text-lg mb-4">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl mb-6 shadow-lg`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 