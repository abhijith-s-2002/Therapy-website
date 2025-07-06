'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#fefefe] px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        

        <motion.div
          className="w-full md:w-1/2 text-center md:text-left pt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1
            className="text-4xl font-bold mb-6 text-[#7e7e6b]"
            style={{ fontFamily: '"Freight Display Pro", serif', fontWeight: 700 }}
          >
            About Dr. Serena Blake
          </h1>
          <p
            className="text-lg mb-4 leading-relaxed text-[#7e7e6b]"
            style={{ fontFamily: '"Freight Display Pro", serif', fontWeight: 300 }}
          >
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
            with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral
            therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, 
            and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom. 
          </p>
          <p
            className="text-lg leading-relaxed text-[#7e7e6b]"
            style={{ fontFamily: '"Freight Display Pro", serif', fontWeight: 300 }}
          >
            Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </motion.div>

        
        <motion.div
          className="w-full md:w-1/2 flex justify-center pt-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/person.jpg"
            alt="Profile photo"
            width={400}
            height={400}
            className="shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default AboutPage;
