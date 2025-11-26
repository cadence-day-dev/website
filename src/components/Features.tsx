'use client';

import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaShieldAlt, FaBolt, FaUsers, FaCloud } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: FaCode,
    title: 'Modern Development',
    description: 'Build with the latest technologies and best practices for exceptional performance.',
  },
  {
    icon: FaChartLine,
    title: 'Analytics & Insights',
    description: 'Get real-time data and actionable insights to make informed business decisions.',
  },
  {
    icon: FaShieldAlt,
    title: 'Enterprise Security',
    description: 'Bank-level security protocols to keep your data safe and compliant.',
  },
  {
    icon: FaBolt,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures your applications run at peak speed.',
  },
  {
    icon: FaUsers,
    title: 'Team Collaboration',
    description: 'Seamless tools for teams to work together efficiently and productively.',
  },
  {
    icon: FaCloud,
    title: 'Cloud Integration',
    description: 'Fully integrated with major cloud providers for scalability and reliability.',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to build, scale, and succeed in the modern digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4"
              >
                <feature.icon className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
