'use client'

import Hero from './components/Hero'
import ThreadGenerator from './components/ThreadGenerator'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import BottomNav from './components/BottomNav'
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
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">TC</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-black dark:text-white hidden sm:block">
                ThreadCraft
              </span>
            </div>

            {/* Center - Navigation Links (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Templates
              </button>
              <button
                onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Examples
              </button>
              <button
                onClick={() => document.getElementById('help')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Help
              </button>
            </div>

            {/* Right Side - Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="x-main-content">
          <div id="home">
            <Hero />
          </div>
          <div id="generator">
            <ThreadGenerator />
          </div>
          <div id="templates">
            <Templates />
          </div>
          <div id="examples">
            <Examples />
          </div>
          <div id="help">
            <Help />
          </div>
          <HowItWorks />
        </div>

        <Footer />
      </div>
      
      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </main>
  )
} 