'use client';

import { motion } from 'framer-motion';
import { Star, ArrowUpRight, Download } from 'lucide-react';
import Image from 'next/image';

export default function Intro() {
  return (
    <section id="intro" className="relative h-[calc(100vh-1rem)] flex flex-col items-center justify-center overflow-hidden pt-20 pb-4 px-4 rounded-[30px] md:rounded-[40px] mx-2 md:mx-4 my-2 shadow-sm bg-[#fcfcfc]">
      
      {/* Decorative background elements */}
      <div className="absolute top-[10%] left-[8%] hidden lg:block opacity-10 transform -rotate-12 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="50" stroke="#1e3a8a" strokeWidth="1" strokeDasharray="8 8" />
        </svg>
      </div>

      {/* Badge (Top) */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-24 md:top-28 px-5 py-1.5 rounded-full border border-black/10 bg-white shadow-sm flex items-center gap-2 z-30"
      >
        <span className="text-black font-medium tracking-tight text-xs md:text-sm">I&apos;m Chamika Nuwantha</span>
      </motion.div> */}

      {/* Main Heading - Layered behind image */}
      <div className="relative flex flex-col items-center z-10 text-center w-full max-w-5xl mb-[-4rem] md:mb-[-6rem] pt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-bold tracking-tight text-black leading-[1] pointer-events-none"
        >
          Chamika <span className="text-[#1e3a8a]">Nuwantha</span><br />
          Software Engineer
        </motion.h1>
      </div>

      {/* Center Content: Image & Stats */}
      <div className="relative w-full max-w-5xl flex flex-col items-center justify-end h-[450px] md:h-[600px]">
        
        {/* Background Semi-circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-0 w-[240px] h-[120px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[300px] bg-[#1e3a8a] rounded-t-full z-0 shadow-2xl"
        />

        {/* Profile Image */}
        <div className="relative z-20 w-fit h-full flex items-end justify-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-sm h-full flex items-end justify-center relative"
          >
            <Image
              src="/assets/png.png"
              alt="Chamika Nuwantha"
              width={650}
              height={850}
              className="object-contain h-full w-auto select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              priority
            />
            
            {/* Action Buttons - clearly visible over the image and semi-circle */}
            <div className="absolute bottom-12 flex flex-row items-center gap-3 z-30 w-fit justify-center">
               <a 
                 href="/assets/resume.pdf"
                 download
                 className="px-6 md:px-10 py-4 bg-[#1e3a8a] text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-2xl hover:bg-[#172554] transition-all transform hover:scale-105 active:scale-95 group text-xs md:text-sm"
               >
                  Resume
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
               </a>
               <a 
                 href="#contact"
                 className="px-6 md:px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all transform hover:scale-105 active:scale-95 text-xs md:text-sm shadow-xl"
               >
                  Hire me
               </a>
            </div>
          </motion.div>
        </div>

        {/* Floating elements at edges */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute left-0 bottom-[20%] hidden xl:flex flex-col gap-2 max-w-[220px] bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-black/5 shadow-sm z-30"
        >
          <div className="text-[#1e3a8a]">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
               <path d="M5.017 16H8.017V23H5.017C3.9124 23 3.017 22.1046 3.017 21V18C3.017 16.8954 3.9124 16 5.017 16ZM16.017 16H19.017V23H16.017C14.9124 23 14.017 22.1046 14.017 21V18C14.017 16.8954 14.9124 16 16.017 16Z" />
             </svg>
          </div>
          <p className="text-black/80 text-sm font-medium leading-relaxed italic">
            &quot;I build digital experiences & capture moments. Specializing in exceptional web and IoT systems.&quot;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute right-0 bottom-[20%] hidden xl:flex flex-col items-end gap-2 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-black/5 shadow-sm z-30"
        >
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} fill="#1e3a8a" color="#1e3a8a" />
            ))}
          </div>
          <div className="text-right">
            <h3 className="text-3xl font-bold text-black tabular-nums">1.5 <span className="text-lg font-normal text-black/60">Years</span></h3>
            <p className="text-black/50 font-bold uppercase tracking-widest text-[8px]">Development Exp</p>
          </div>
        </motion.div>

      </div>
      
    </section>
  );
}
