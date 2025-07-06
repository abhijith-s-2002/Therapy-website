'use client';

import React from "react";
import { motion } from "framer-motion";

const MessageBanner = () => {
  return (
    <motion.section
      className="relative w-full h-[500px] bg-opacity-10 bg-cover bg-center flex items-center justify-center text-center text-black px-6"
      style={{
        backgroundImage: `url('/img.jpg')`,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <div className="p-6 rounded-lg max-w-2xl pb-5">
        <h2
          className="text-3xl font-semibold leading-relaxed"
          style={{ fontFamily: '"freight-display-pro", serif', fontWeight: 300 }}
        >
          “I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.”
        </h2>
        <p
          className="pt-10"
          style={{ fontFamily: '"freight-sans-pro", serif', fontWeight: 300 }}
        >
          —Audre Lorde
        </p>
      </div>
    </motion.section>
  );
};

export default MessageBanner;
