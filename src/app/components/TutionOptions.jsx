"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tutionOptions = [
  { title: "NEVER PLAYED", href: "/lessons/never-played", bg: "bg-gradient-to-br from-slate-900/85 via-indigo-950/85 to-black/90" },
  { title: "BEGINNERS", href: "/lessons/beginners", bg: "bg-gradient-to-br from-zinc-900/85 via-blue-950/85 to-black/90" },
  { title: "INTERMEDIATE", href: "/lessons/intermediate", bg: "bg-gradient-to-br from-neutral-900/85 via-red-950/85 to-black/90" },
  { title: "ADVANCED", href: "/lessons/advanced", bg: "bg-gradient-to-br from-stone-900/85 via-emerald-950/85 to-black/90" },
  { title: "EXPERIENCED", href: "/lessons/experienced", bg: "bg-gradient-to-br from-gray-900/85 via-amber-950/85 to-black/90" },
  { title: "ELECTRIC", href: "/lessons/electric", bg: "bg-gradient-to-br from-zinc-950/85 via-rose-950/85 to-black/90" },
  { title: "ACOUSTIC", href: "/lessons/acoustic", bg: "bg-gradient-to-br from-slate-950/85 via-cyan-950/85 to-black/90" },
  { title: "CLASSICAL", href: "/lessons/classical", bg: "bg-gradient-to-br from-neutral-950/85 via-indigo-950/85 to-black/90" },
  { title: "UKULELE", href: "/lessons/ukulele", bg: "bg-gradient-to-br from-stone-950/85 via-orange-950/85 to-black/90" },
  { title: "BASS", href: "/lessons/bass", bg: "bg-gradient-to-br from-gray-950/85 via-fuchsia-950/85 to-black/90" },
  { title: "INDIVIDUAL", href: "/lessons/individual", bg: "bg-gradient-to-br from-zinc-900/85 via-yellow-950/85 to-black/90" },
  { title: "GROUP CLASSES", href: "/lessons/group-classes", bg: "bg-gradient-to-br from-slate-900/85 via-pink-950/85 to-black/90" },
  { title: "TUTORING & SUPPORT", href: "/lessons/tutoring-support", bg: "bg-gradient-to-br from-neutral-900/85 via-teal-950/85 to-black/90" },
  { title: "SONGWRITING", href: "/lessons/songwriting", bg: "bg-gradient-to-br from-stone-900/85 via-zinc-800/85 to-black/90" },
  { title: "THEORY", href: "/lessons/theory", bg: "bg-gradient-to-br from-gray-900/85 via-slate-800/85 to-black/90" },
  { title: "BLUES", href: "/lessons/blues", bg: "bg-gradient-to-br from-slate-900/85 via-blue-900/85 to-black/90" },
  { title: "COUNTRY", href: "/lessons/country", bg: "bg-gradient-to-br from-zinc-900/85 via-amber-900/85 to-black/90" },
  { title: "ROCK", href: "/lessons/rock", bg: "bg-gradient-to-br from-neutral-900/85 via-red-900/85 to-black/90" },
  { title: "JAZZ", href: "/lessons/jazz", bg: "bg-gradient-to-br from-stone-900/85 via-orange-900/85 to-black/90" },
  { title: "POP", href: "/lessons/pop", bg: "bg-gradient-to-br from-gray-900/85 via-rose-900/85 to-black/90" },
];

export default function TutionOptions() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const horizontalSection = sectionRef.current;
      gsap.to(horizontalSection, {
        x: () => -(horizontalSection.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=6500",
          pin: true,
          scrub: 2.5,
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={triggerRef} className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 mb-8">
        <div ref={titleRef} className="opacity-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-wider text-white uppercase">
            TUTION OPTIONS
          </h2>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div 
          ref={sectionRef} 
          className="flex gap-8 w-max pl-6 sm:pl-10 lg:pl-[max(3rem,calc((100vw-1400px)/2+3rem))] pr-16"
        >
          {tutionOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              className="group relative w-[75vw] sm:w-[500px] lg:w-[650px] h-[380px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex items-end justify-end p-8 sm:p-12 transition-transform duration-500 hover:scale-[1.01]"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/guitar-option-bg.webp')` }}
              ></div>

              {/* Reduced Opacity Color Gradient Overlay */}
              <div className={`absolute inset-0 ${option.bg} transition-opacity duration-300`}></div>

              {/* Card Title */}
              <h3 className="relative z-10 text-white font-black text-2xl sm:text-3xl lg:text-4xl tracking-wide uppercase drop-shadow-md text-right">
                {option.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}