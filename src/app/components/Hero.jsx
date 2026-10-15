"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let ctx = gsap.context(() => {
      gsap.set(textRef.current, { x: -40, opacity: 0 });

      gsap.to(textRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      });

      video.currentTime = 0;
      video.play().catch((err) => console.log("Play error:", err));
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="w-full bg-black flex justify-center">
      <div 
        ref={containerRef} 
        className="relative w-full max-w-[1400px] h-[550px] bg-black overflow-hidden flex items-center justify-between px-6 lg:px-16"
      >
        <div 
          ref={textRef} 
          className="relative w-full lg:w-[48%] space-y-4 z-25 opacity-0 pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold tracking-widest text-xs uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            WELCOME TO GUITARLEARN
          </div>
          
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1] drop-shadow-lg">
            GUITAR LESSONS IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">BRIGHTON</span> & BURGESS HILL
          </h1>
          
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed drop-shadow-md">
            Learn Electric, Acoustic & Classical guitar with professional teachers. Master your favorite songs with custom interactive methods and structured guidance.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link 
              href="/book-a-lesson" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-full shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105 text-xs sm:text-sm"
            >
              BOOK A LESSON
            </Link>
            <Link 
              href="/guitar-lessons" 
              className="border border-gray-700 hover:border-blue-500 bg-black/40 backdrop-blur-md text-gray-300 hover:text-white font-semibold px-6 py-2.5 rounded-full transition-all text-xs sm:text-sm"
            >
              EXPLORE LESSONS
            </Link>
          </div>
        </div>

        <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full z-10 flex items-center justify-end pr-4 lg:pr-12 pointer-events-none">
          <video 
            ref={videoRef}
            src="/guitar-story.mp4" 
            className="w-full h-full object-contain scale-85 lg:scale-90"
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>
    </div>
  );
}