'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

const faqsData = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

const FaqsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-[#0d5175]">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h1
          className="text-4xl font-bold text-center mb-4 pb-10"
          style={{ fontFamily: '"freight-display-pro", serif', fontWeight: 300 }}
        >
          Frequently Asked Questions
        </h1>


        <p
          className="text-2xl mb-8 text-left pb-5"
          style={{ fontFamily: '"freight-display-pro", serif', fontWeight: 300 }}
        >
          Therapy
        </p>


        <div className="space-y-6">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="border-b border-gray-300 pb-4 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">

                  <div
                    className={`w-8 h-8 flex items-center justify-center border border-[#0d5175] rounded-full transition-transform duration-300 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#0d5175]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <div className="flex-1" style={{ fontFamily: '"freight-sans-pro", serif', fontWeight: 300 }}>
                    <h3 className="text-xl">{faq.question}</h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-40 mt-2" : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </main>
  );
};

export default FaqsPage;
