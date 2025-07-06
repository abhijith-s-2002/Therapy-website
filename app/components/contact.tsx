'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    const checked = isCheckbox && (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: isCheckbox ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be exactly 10 digits';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'This field is required';
    if (!formData.preferredTime.trim())
      newErrors.preferredTime = 'This field is required';
    if (!formData.agree) newErrors.agree = 'Consent is required';
    if (!captchaValue) newErrors.captcha = 'Please verify that you are not a robot';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setErrors({});
      alert('Form submitted successfully!');

    }
  };

  return (
    <motion.main
      className="min-h-screen bg-[#f5f7fb] px-4 sm:px-6 py-12 sm:py-16 flex items-center justify-center"
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-full max-w-lg bg-[#f5f7fb] border-2 border-[#22423a] rounded-xl p-6 sm:p-8 shadow-lg text-[#22423a]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-[#f5f7fb] text-[#22423a] placeholder-gray-500 focus:outline-none focus:ring focus:ring-[#22423a]/40"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>


          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="1234567890"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-[#f5f7fb] text-[#22423a] placeholder-gray-500 focus:outline-none focus:ring focus:ring-[#22423a]/40"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>


          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-[#f5f7fb] text-[#22423a] placeholder-gray-500 focus:outline-none focus:ring focus:ring-[#22423a]/40"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>


          <div>
            <label className="block text-sm font-medium mb-1">
              What brings you here?
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your interest or concern"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-[#f5f7fb] text-[#22423a] placeholder-gray-500 focus:outline-none focus:ring focus:ring-[#22423a]/40"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>


          <div>
            <label className="block text-sm font-medium mb-1">
              Preferred time to reach you
            </label>
            <input
              type="text"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              placeholder="e.g. Weekdays after 6 PM"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-[#f5f7fb] text-[#22423a] placeholder-gray-500 focus:outline-none focus:ring focus:ring-[#22423a]/40"
            />
            {errors.preferredTime && (
              <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>
            )}
          </div>


          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              id="agree"
            />
            <label htmlFor="agree" className="text-sm">
              I agree to be contacted
            </label>
          </div>
          {errors.agree && <p className="text-red-600 text-sm mt-1">{errors.agree}</p>}


          <div className="mt-4">
            <ReCAPTCHA
              sitekey="6LeUmXkrAAAAAKzH2qvAUIQJVvPCXg8anfDRAmaI" 
              onChange={handleCaptchaChange}
            />
            {errors.captcha && (
              <p className="text-red-600 text-sm mt-2">{errors.captcha}</p>
            )}
          </div>


          <button
            type="submit"
            className="bg-[#22423a] text-white font-medium px-6 py-3 rounded hover:bg-[#1a322d] transition mt-6 w-full cursor-pointer"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </motion.main>
  );
};

export default ContactPage;
