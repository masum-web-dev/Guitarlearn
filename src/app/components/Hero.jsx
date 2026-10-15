"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let ctx = gsap.context(() => {
      // Modern staggered smooth entrance animation for text elements
      const elements = textContainerRef.current.children;
      gsap.set(elements, { y: 40, opacity: 0 });

      gsap.to(elements, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      video.currentTime = 0;
      video.play().catch((err) => console.log("Play error:", err));

      const handleTimeUpdate = () => {
        if (video.currentTime >= 5.0) {
          video.pause();
          video.removeEventListener("timeupdate", handleTimeUpdate);
        }
      };

      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="w-full bg-black flex justify-center">
      <div 
        ref={containerRef} 
        className="relative w-full max-w-[1400px] h-[550px] bg-black overflow-hidden flex items-center justify-between px-6 lg:px-12"
      >
        {/* Left Side Text Column with Modern Redesigned Look */}
        <div 
          ref={textContainerRef} 
          className="relative w-full lg:w-[45%] space-y-6 z-25 pointer-events-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold tracking-wider text-xs uppercase backdrop-blur-md shadow-lg shadow-blue-500/10">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            WELCOME TO GUITARLEARN
          </div>
          
          {/* Modern Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1] drop-shadow-lg">
            GUITAR LESSONS IN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
              BRIGHTON & BURGESS HILL
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
            Learn Electric, Acoustic & Classical guitar with professional teachers. Master your favorite songs with custom interactive methods and structured guidance.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link 
              href="/book-a-lesson" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3 rounded-full shadow-xl shadow-blue-600/30 transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs sm:text-sm tracking-wide"
            >
              BOOK A LESSON
            </Link>
            <Link 
              href="/guitar-lessons" 
              className="border border-zinc-700 hover:border-blue-500 bg-zinc-900/60 backdrop-blur-md text-gray-300 hover:text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 text-xs sm:text-sm tracking-wide"
            >
              EXPLORE LESSONS
            </Link>
          </div>
        </div>

        {/* Right Side Video Column */}
        <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full z-10 flex items-center justify-end pr-0 pointer-events-none">
          <video 
            ref={videoRef}
            src="/guitar-story.mp4" 
            className="w-full h-full object-contain"
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>
    </div>
  );
}