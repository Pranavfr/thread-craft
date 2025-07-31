'use client'

import { Home, Edit3, FileText, HelpCircle, Settings } from 'lucide-react'

export default function BottomNav() {
  const navItems = [
    {
      icon: Home,
      label: 'Home',
      action: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      icon: Edit3,
      label: 'Create',
      action: () => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      icon: FileText,
      label: 'Templates',
      action: () => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      icon: HelpCircle,
      label: 'Help',
      action: () => document.getElementById('help')?.scrollIntoView({ behavior: 'smooth' })
    }
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.label}
              onClick={item.action}
              className="flex flex-col items-center justify-center w-16 h-16 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700"
            >
              <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 mb-1" />
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
} 