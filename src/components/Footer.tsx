'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cadence
              </span>
            </h3>
            <p className="text-gray-400">
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Features', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-purple-400 transition-colors inline-block"
                    >
                      {item}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Consulting', 'Support'].map((item) => (
                <li key={item}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-purple-400 transition-colors inline-block cursor-pointer"
                  >
                    {item}
                  </motion.span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: FaGithub, href: 'https://github.com' },
                { icon: FaTwitter, href: 'https://twitter.com' },
                { icon: FaLinkedin, href: 'https://linkedin.com' },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 transition-all"
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Cadence. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-pink-400" />
            </motion.span>
            by the Cadence Team
          </p>
        </div>
      </div>
    </footer>
  );
}
