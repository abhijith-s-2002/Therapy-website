'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-[#f3f0e8] px-6 py-16 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">

        <motion.div
          className="mb-12 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl sm:text-5xl leading-relaxed pb-10 text-[#474745]"
            style={{ fontFamily: '"freight-display-pro", serif', fontWeight: 300 }}
          >
            Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
          </h2>

          <p
            className="text-lg sm:text-xl leading-relaxed text-[#474745]"
            style={{ fontFamily: '"freight-sans-pro", sans-serif', fontWeight: 300 }}
          >
            You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma,
            grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don&apos;t have to face it alone. Therapy offers you the time
            and space to work toward wellness and peace.
          </p>

          <div className="w-[90%] h-[1px] bg-[#1c2121] mx-auto mt-6 rounded-full"></div>
        </motion.div>


        <motion.h1
          className="text-4xl font-bold mb-12 text-[#474745]"
          style={{ fontFamily: '"freight-display-pro", serif', fontWeight: 300 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Areas of Focus
        </motion.h1>


        <div className="grid gap-16 sm:grid-cols-3 justify-items-center">
          
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-72 h-72 rounded-full overflow-hidden mb-4">
              <Image
                src="/service1.jpg"
                alt="Anxiety & Stress Management"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-2xl font-normal" style={{ fontFamily: '"freight-display-pro", serif', fontWeight: 300 }}>
              Anxiety & Stress Management
            </p>
            <p className="text-sm text-gray-600 mt-2 leading-6" style={{ fontFamily: '"freight-sans-pro", sans-serif', fontWeight: 300 }}>
              Anxiety and chronic stress can impact every aspect of your life—from sleep and concentration to your relationships and overall well-being.
              In therapy, you&apos;ll gain practical tools to calm your nervous system, challenge unhelpful thinking patterns,
              and respond to life&apos;s challenges with greater clarity and confidence.
            </p>
          </motion.div>

          
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-72 h-72 rounded-full overflow-hidden mb-4">
              <Image
                src="/service2.jpg"
                alt="Relationship Counseling"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-2xl font-normal" style={{ fontFamily: '"freight-display-pro", serif', fontWeight: 300 }}>
              Relationship Counseling
            </p>
            <p className="text-sm text-gray-600 mt-2 leading-6" style={{ fontFamily: '"freight-sans-pro", sans-serif', fontWeight: 300 }}>
              Whether you&apos;re facing conflict, communication breakdowns, or emotional distance, therapy can help you reconnect and grow.
              In a non-judgmental space, we&apos;ll work on resolving issues and building meaningful connections.
            </p>
          </motion.div>

          
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-72 h-72 rounded-full overflow-hidden mb-4">
              <Image
                src="/service3.jpg"
                alt="Trauma Recovery"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-2xl font-normal" style={{ fontFamily: '"freight-display-pro", serif', fontWeight: 300 }}>
              Trauma Recovery
            </p>
            <p className="text-sm text-gray-600 mt-2 leading-6" style={{ fontFamily: '"freight-sans-pro", sans-serif', fontWeight: 300 }}>
              Trauma-informed therapy provides a safe space to explore your past, reduce distressing symptoms, and move toward healing.
              We&apos;ll work at your pace to restore safety, confidence, and strength.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
