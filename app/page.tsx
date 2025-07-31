'use client'

import Hero from './components/Hero'
import ThreadGenerator from './components/ThreadGenerator'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import Templates from './components/Templates'
import Examples from './components/Examples'
import Help from './components/Help'

export default function Home() {
  return (
    <main className="bg-white dark:bg-black min-h-screen">
      <div className="x-main">
        {/* Mobile-First Navigation */}
        <nav className="x-nav px-4 sm:px-6">
          <div className="flex items-center justify-between w-full">
            {/* Left Side - Brand */}
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-bold text-black dark:text-white">
                ThreadCraft
              </span>
            </div>

            {/* Center - Navigation Links (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
              >
                Templates
              </button>
              <button
                onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
              >
                Examples
              </button>
              <button
                onClick={() => document.getElementById('help')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
              >
                Help
              </button>
            </div>

            {/* Right Side - Theme Toggle */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="x-main-content">
          {/* Hero Section */}
          <div id="home">
            <Hero />
          </div>

          {/* Thread Generator Section */}
          <div id="generator">
            <ThreadGenerator />
          </div>

          {/* Templates Section */}
          <div id="templates">
            <Templates />
          </div>

          {/* Examples Section */}
          <div id="examples">
            <Examples />
          </div>

          {/* Help Section */}
          <div id="help">
            <Help />
          </div>

          {/* How It Works Section */}
          <HowItWorks />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
} 