"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LessonInfo() {
  const containerRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondContentRef = useRef(null);
  const bgLayerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(firstTextRef.current, { scale: 1, opacity: 1 });
      gsap.set(secondContentRef.current, { opacity: 0, scale: 0.8, y: 30 });
      gsap.set(bgLayerRef.current, { backgroundColor: "#000000" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2500",
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      tl.to(firstTextRef.current, {
        scale: 4,
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
      }, 0)
      .to(bgLayerRef.current, {
        backgroundColor: "#ffffff",
        duration: 1.5,
        ease: "power2.inOut",
      }, 0.2)
      .to(secondContentRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }, 0.9);

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center -mt-12"
    >
      <div 
        ref={bgLayerRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-16 transition-colors"
      >
        <div 
          ref={firstTextRef}
          className="absolute inset-0 flex items-center justify-center px-6 sm:px-12 lg:px-24 text-center z-10"
        >
          <p className="text-white text-lg sm:text-2xl lg:text-3xl font-bold leading-relaxed max-w-4xl">
            At Guitarlearn you can learn your way. Want to learn Fingerstyle and Rock? Want to write your own songs and learn blues? there’s always something new to learn!
          </p>
        </div>

        <div 
          ref={secondContentRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 opacity-0 px-6 sm:px-12"
        >
          <div className="w-full max-w-4xl space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 uppercase">
              IT’S YOUR TUTION
            </h2>
            <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed max-w-2xl mx-auto border-l-4 border-blue-600 pl-4 text-left sm:text-center">
              “Tom is reliable and good with children of all ages & abilities. I highly recommend him.” -Paula
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}