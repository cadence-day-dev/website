'use client';

import { motion } from 'framer-motion';

export default function Clock() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      {/* Outer circle */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-purple-400/30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      
      {/* Inner circle */}
      <motion.div
        className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      />
      
      {/* Center dot */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      
      {/* Subtle pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-400/50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}