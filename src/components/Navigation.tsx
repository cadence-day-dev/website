'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-200px h-200px">
        <div className="flex justify-between items-center h-2">
          <Link href="/" className="text-2xl text-white">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className=" bg-white bg-clip-text text-transparent"
            >
              Track your day understand your rhythm
            </motion.span>
          </Link>
          <Link href="/" className="text-2xl text-white">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className=" bg-white bg-clip-text text-transparent"
            >
              Cadence helps you see where yout time really goes one simple tap at a time.
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex space-x-8">
            {['Home', 'Features', 'About', 'Blog', 'Contact'].map((item) => (
              <Link key={item} href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                  {item}
                </motion.span>
              </Link>
            ))}
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pb-4"
          >
            {['Home', 'Features', 'About', 'Blog', 'Contact'].map((item) => (
              <Link key={item} href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}>
                <div
                  className="block py-2 text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
