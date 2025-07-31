'use client'

import { useState } from 'react'
import Hero from './components/Hero'
import ThreadGenerator from './components/ThreadGenerator'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import Examples from './components/Examples'
import Help from './components/Help'
import { Menu, X } from 'lucide-react'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    closeMobileMenu()
  }

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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('examples')}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
              >
                Examples
              </button>
              <button
                onClick={() => scrollToSection('help')}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
              >
                Help
              </button>
            </div>

            {/* Right Side - Theme Toggle and Mobile Menu */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-lg z-50">
              <div className="px-4 py-4 space-y-3">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('examples')}
                  className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors"
                >
                  Examples
                </button>
                <button
                  onClick={() => scrollToSection('help')}
                  className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors"
                >
                  Help
                </button>
              </div>
            </div>
          )}
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