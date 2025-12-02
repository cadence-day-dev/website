'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const activities = [
  { name: 'Work', color: '#4F46E5' },     // Blue-purple
  { name: 'Friends', color: '#10B981' },   // Green
  { name: 'Cooking', color: '#F59E0B' },   // Yellow
  { name: 'Rest', color: '#FFFFFF' },      // White
  { name: 'Sport', color: '#8B5CF6' },     // Purple
  { name: 'Reading', color: '#3B82F6' },   // Blue
];

export default function ActivitySelector() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      
      if (event.deltaY > 0) {
        // Scrolling down - show component
        setIsVisible(true);
      } else {
        // Scrolling up - hide component
        setIsVisible(false);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 200, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ 
        duration: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 30
      }}
      className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-20"
    >
      <div className="flex items-center space-x-8 ">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.name}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 1.7 + (index * 0.1),
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="flex flex-col items-center cursor-pointer group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="w-8 h-8 rounded-full mb-2 transition-transform group-hover:scale-110"
              style={{ backgroundColor: activity.color }}
            />
            <span className="text-sm text-white font-light group-hover:text-gray-300 transition-colors">
              {activity.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}