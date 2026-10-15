"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CallToAction() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(cardRef.current, { scale: 0.96, opacity: 0, y: 40 });

      gsap.to(cardRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-black py-12 px-6 lg:px-12 flex justify-center">
      {/* Max container width 1400px */}
      <div className="w-full max-w-[1400px]">
        
        {/* Main Banner Card */}
        <div 
          ref={cardRef}
          className="relative w-full rounded-[40px] overflow-hidden shadow-2xl bg-[#0070f3] py-16 px-8 sm:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 opacity-0 border border-blue-400/40"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 112, 243, 0.92), rgba(0, 90, 210, 0.95)), url('/guitar-option-bg.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Left Side Content */}
          <div className="w-full lg:w-[65%] space-y-4 text-left">
            
            {/* Get Started Badge */}
            <div className="inline-block px-3.5 py-1 rounded bg-black text-white font-bold tracking-widest text-xs uppercase shadow-md">
              GET STARTED
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.1]">
              ARE YOU READY TO ROCK?
            </h2>

            {/* Subtitle */}
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-medium">
              What are you waiting for? Your musical journey into the world of guitar starts here!
            </p>

          </div>

          {/* Right Side Book Now Button */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end">
            <Link 
              href="/book-a-lesson" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border-2 border-white text-white font-bold tracking-wider text-sm sm:text-base uppercase transition-all duration-300 hover:bg-white hover:text-[#0070f3] shadow-lg"
            >
              Book Now
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}