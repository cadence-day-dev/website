'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Clock from './Clock';

// Generate background elements outside component to avoid re-generation
const generateBackgroundElements = () =>
  [...Array(20)].map((_, i) => ({
    key: i,
    width: Math.random() * 300 + 50,
    height: Math.random() * 300 + 50,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    xOffset: Math.random() * 20 - 10,
  }));

export default function Hero() {
  const [backgroundElements] = useState(generateBackgroundElements);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((el) => (
          <motion.div
            key={el.key}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              width: el.width,
              height: el.height,
              left: el.left,
              top: el.top,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, el.xOffset, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Clock />

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Welcome to
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
            >
              Cadence
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Track your day understand your rhythm — Cadence helps you see where your time really goes one simple tap at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Get Started
              <FaArrowRight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-400 rounded-full text-white font-semibold hover:bg-purple-400/20 transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-purple-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
