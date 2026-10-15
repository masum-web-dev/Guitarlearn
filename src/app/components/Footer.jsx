"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 border-t border-zinc-900 pt-16 pb-12 px-6 lg:px-12">
      <div className="w-full max-w-[1400px] mx-auto space-y-12">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Newsletter (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <h3 className="text-white font-black text-xl tracking-wider uppercase">
                GUITARLEARN<span className="text-blue-500">.</span>CO.UK
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Sign up for free tips, exclusive lessons, guitar news, and special discount offers right in your inbox!
              </p>
            </div>

            {/* Modern Newsletter Input */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-zinc-900/90 border border-zinc-800 text-white placeholder-gray-500 text-sm rounded-full py-3.5 pl-5 pr-32 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-full shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 transition-all">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 transition-all">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 transition-all">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Our Tuition (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase border-l-2 border-blue-500 pl-3">
              OUR TUITION
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              {[
                "Burgess Hill Guitar Lessons",
                "Brighton Guitar Lessons",
                "Burgess Hill Piano Lessons",
                "Burgess Hill Drum Lessons",
                "Burgess Hill Singing Lessons",
                "Hove Guitar Lessons",
                "Affordable Guitar Lessons",
                "Homework & Support Package",
                "Zoom Guitar Group",
                "Skype Guitar Lessons"
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:text-blue-400 transition-colors block py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Helpful Links (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase border-l-2 border-blue-500 pl-3">
              HELPFUL LINKS
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              {[
                "About Us",
                "Contact Us",
                "FAQ",
                "Become a Tutor",
                "Piano Teacher Jobs",
                "Singing Teacher Jobs",
                "Terms & Conditions",
                "Privacy Policy",
                "Sussex Guitar Setups",
                "Guitar Blog"
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:text-blue-400 transition-colors block py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2012 - 2026 Guitarlearn. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Terms</Link>
            <span className="uppercase tracking-widest text-zinc-600">POWERED BY INVENT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}