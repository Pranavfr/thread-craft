'use client'

import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="x-footer">
      <div className="x-footer-content">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/threadcraft"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-[#1da1f2] dark:hover:text-[#1da1f2] rounded-lg transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/threadcraft"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/threadcraft"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 ThreadCraft. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 