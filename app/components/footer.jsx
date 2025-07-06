'use client';

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#f3f0e8] py-8 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-2 text-sm sm:text-base">
        <h2
          className="text-4xl pb-2"
          style={{ fontFamily: '"freight-display-pro", serif', fontWeight: 300 }}
        >
          Dr. Serena Blake, Licensed Psychologist
        </h2>

        <p className="pb-2">Phone: (323) 555-0192</p>
        <p>
          <a
            href="mailto:serena@blakepsychology.com"
            className="underline pb-2"
            style={{ fontFamily: '"freight-sans-pro", serif', fontWeight: 300 }}
          >
            serena@blakepsychology.com
          </a>
        </p>
        <p
          className="pb-2"
          style={{ fontFamily: '"freight-sans-pro", serif', fontWeight: 300 }}
        >
          1287 Maplewood Drive, Los Angeles, CA 90026
        </p>
        <p
          className="pt-4 text-xl text-gray-600"
          style={{ fontFamily: '"freight-sans-pro", serif', fontWeight: 300 }}
        >
          © {new Date().getFullYear()} Serena Blake Psychology. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
