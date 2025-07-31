'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Copy, Sparkles, TrendingUp, BookOpen, Lightbulb, Zap } from 'lucide-react'

interface Template {
  id: string
  title: string
  description: string
  category: string
  icon: any
  prompt: string
}

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const templates: Template[] = [
    {
      id: 'viral-thread',
      title: 'Viral Thread',
      description: 'Create threads that go viral with hooks and storytelling',
      category: 'Growth',
      icon: TrendingUp,
      prompt: 'Create a viral thread about [topic] that hooks readers in the first tweet and builds suspense throughout. Use storytelling techniques and end with a strong call-to-action.'
    },
    {
      id: 'educational',
      title: 'Educational Thread',
      description: 'Teach complex topics in simple, digestible tweets',
      category: 'Education',
      icon: BookOpen,
      prompt: 'Create an educational thread about [topic] that breaks down complex concepts into simple, easy-to-understand tweets. Include examples and actionable takeaways.'
    },
    {
      id: 'story-thread',
      title: 'Story Thread',
      description: 'Share personal stories and experiences',
      category: 'Personal',
      icon: Lightbulb,
      prompt: 'Create a personal story thread about [topic] that shares real experiences, lessons learned, and insights. Make it relatable and inspiring.'
    },
    {
      id: 'quick-tips',
      title: 'Quick Tips Thread',
      description: 'Share actionable tips and advice',
      category: 'Tips',
      icon: Zap,
      prompt: 'Create a quick tips thread about [topic] with actionable advice that readers can implement immediately. Make each tip practical and valuable.'
    }
  ]

  const useTemplate = (template: Template) => {
    setSelectedTemplate(template)
    // Scroll to generator and populate with template
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })
    // You can add logic here to populate the generator with the template
  }

  if (!isClient) {
    return (
      <section className="x-container border-t border-gray-200 dark:border-gray-800">
        <div className="p-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Thread Templates
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose from our proven templates to create engaging threads that perform well
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <div key={template.id} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <template.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white">{template.title}</h3>
                    <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                      {template.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {template.description}
                </p>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Use Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
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
            Thread Templates
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from our proven templates to create engaging threads that perform well
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
              onClick={() => useTemplate(template)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <template.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white">{template.title}</h3>
                  <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                    {template.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {template.description}
              </p>
              
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Use Template
              </button>
            </motion.div>
          ))}
        </div>

        {selectedTemplate && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
          >
            <h3 className="font-semibold text-black dark:text-white mb-2">
              Selected: {selectedTemplate.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {selectedTemplate.prompt}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
} 