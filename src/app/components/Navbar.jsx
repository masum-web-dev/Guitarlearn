"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-blue-600 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide shadow-inner">
        🎸 Learn with Tom in Burgess Hill — Book Your First Guitar Lesson Today!
      </div>

      {/* Main Black Modern Floating Navbar */}
      <header className="sticky top-0 z-50 w-full bg-black border-b border-gray-800 shadow-lg transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* Brand Logo from public folder - Made Much Bigger */}
            <Link href="/" className="flex items-center group py-2">
              <div className="relative h-14 w-48 transition-transform group-hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="Guitarlearn Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-gray-900 border border-gray-800 px-5 py-2.5 rounded-full shadow-inner">
              <Link href="/" className="px-4 py-2 text-xs font-bold text-blue-400 hover:text-white transition-colors tracking-wider">HOME</Link>
              <Link href="/guitar-lessons" className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-blue-400 transition-colors tracking-wider">LESSONS</Link>
              <Link href="/guitar-group-class" className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-blue-400 transition-colors tracking-wider">GROUP CLASS</Link>
              <Link href="/custom-guitar-course" className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-blue-400 transition-colors tracking-wider">COURSES</Link>
              <Link href="/about" className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-blue-400 transition-colors tracking-wider">ABOUT</Link>
              <Link href="/teaching-areas" className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-blue-400 transition-colors tracking-wider">AREAS</Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link 
                href="/book-a-lesson" 
                className="relative group overflow-hidden rounded-full p-px font-bold tracking-wider text-white shadow-md transition-transform hover:scale-105">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-80 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative block px-6 py-3 rounded-full bg-blue-600 text-xs group-hover:bg-opacity-0 transition-all duration-300">
                  BOOK A LESSON
                </span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-lg bg-gray-900 border border-gray-800">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-gray-800 px-6 py-6 space-y-4 shadow-2xl z-50">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-blue-400 tracking-wider py-1">Home</Link>
            <Link 
              href="/guitar-lessons" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-blue-400 tracking-wider py-1">Lessons</Link>
            <Link 
              href="/guitar-group-class" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-blue-400 tracking-wider py-1">Group Class</Link>
            <Link 
              href="/custom-guitar-course" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-blue-400 tracking-wider py-1">Courses</Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-blue-400 tracking-wider py-1">About</Link>
            <Link 
              href="/teaching-areas" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-blue-400 tracking-wider py-1">Teaching Areas</Link>
            <div className="pt-3">
              <Link 
                href="/book-a-lesson" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider py-4 rounded-xl shadow-md">
                BOOK A LESSON
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}