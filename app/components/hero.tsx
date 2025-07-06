'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);

  return (
<section className="relative w-full min-h-screen bg-[#f3f0e8] overflow-hidden sm:pt-[20vh]">
      {/* Logo Section */}
      <div className="absolute top-6 left-4 sm:left-10 z-20 flex items-center gap-3 sm:gap-4">
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={40}
          height={40}
          className="w-10 sm:w-13 h-auto object-contain"
        />
        <div className="text-left ">
          <h2 className="text-black text-xl sm:text-2xl">Dr. Serena Blake</h2>
          <p className="text-black text-sm sm:text-base mt-1">psychology services</p>
        </div>
      </div>

      {/* Background Video - Responsive Centered */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[90vw] max-h-[80vh] sm:w-[80vw] sm:max-h-[80vh] flex items-center justify-center">
          <video
            ref={videoRef}
            className="
              w-full h-full
              object-cover
              aspect-[9/16] sm:aspect-[16/9]   // Portrait on mobile, landscape on desktop
              brightness-50
            "
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
        <motion.div
          className="text-white text-center max-w-[90%]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug sm:leading-relaxed font-extrabold drop-shadow-lg"
            style={{ fontFamily: '"freight-display-pro", serif', fontWeight: 300 }}
          >
            Psychological Care for <br className="hidden sm:block" />
            Change, Insight, and Well-Being
          </h1>

          <p
            className="mt-3 sm:mt-4 text-base sm:text-lg leading-snug sm:leading-relaxed drop-shadow-sm"
            style={{ fontFamily: '"freight-sans-pro", serif', fontWeight: 300 }}
          >
            8 years of practice, 500+ sessions
          </p>

          <motion.a
            href="#contact"
            className="inline-block mt-6 sm:mt-8 bg-[#94b0b0] text-white text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider text-center px-10 sm:px-20 py-4 sm:py-6 transition-all hover:opacity-75 shadow-md"
            style={{
              clipPath: 'ellipse(50% 50% at 50% 50%)',
              fontFamily: '"freight-sans-pro", sans-serif',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Schedule a
            <br/> Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
