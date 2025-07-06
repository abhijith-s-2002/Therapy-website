'use client';

import React from "react";
import { motion } from "framer-motion";

const RatesStrip = () => {
  return (
    <motion.section
      className="bg-[#94b0b0] text-[#1c2121] px-8 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2
          className="text-4xl sm:text-5xl pb-4"
          style={{ fontFamily: '"freight-display-pro", serif', fontWeight: 300 }}
        >
          Rates and Insurance
        </h2>

        <div
          className="space-y-4 text-xl"
          style={{ fontFamily: '"freight-sans-pro", sans-serif', fontWeight: 300 }}
        >
          <p className="pb-2">Individual session: $200</p>
          <p className="pb-2">Couples session: $225</p>
          <p className="pb-2">In-person: Tue & Thu, 10 AM to 6 PM</p>
          <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM to 5 PM</p>
        </div>
      </div>
    </motion.section>
  );
};

export default RatesStrip;
