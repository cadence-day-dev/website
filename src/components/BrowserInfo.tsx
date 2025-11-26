'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGlobe, FaDesktop, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

interface BrowserData {
  browser: string;
  os: string;
  screenResolution: string;
  language: string;
  timezone: string;
  onlineStatus: boolean;
}

// Detect browser and system information
const detectBrowserInfo = (): BrowserData | null => {
  if (typeof window === 'undefined') return null;
  
  const userAgent = navigator.userAgent;
  let browser = 'Unknown';
  let os = 'Unknown';

  // Detect browser
  if (userAgent.indexOf('Firefox') > -1) {
    browser = 'Mozilla Firefox';
  } else if (userAgent.indexOf('Chrome') > -1) {
    browser = 'Google Chrome';
  } else if (userAgent.indexOf('Safari') > -1) {
    browser = 'Safari';
  } else if (userAgent.indexOf('Edge') > -1) {
    browser = 'Microsoft Edge';
  }

  // Detect OS
  if (userAgent.indexOf('Win') > -1) {
    os = 'Windows';
  } else if (userAgent.indexOf('Mac') > -1) {
    os = 'MacOS';
  } else if (userAgent.indexOf('Linux') > -1) {
    os = 'Linux';
  } else if (userAgent.indexOf('Android') > -1) {
    os = 'Android';
  } else if (userAgent.indexOf('iOS') > -1) {
    os = 'iOS';
  }

  return {
    browser,
    os,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    onlineStatus: navigator.onLine,
  };
};

export default function BrowserInfo() {
  const [browserData] = useState<BrowserData | null>(detectBrowserInfo);
  const [isVisible, setIsVisible] = useState(false);

  if (!browserData) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg"
      >
        <FaGlobe className="text-xl" />
      </motion.button>

      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="absolute bottom-16 right-0 bg-slate-800 border border-purple-500/30 rounded-lg p-6 shadow-2xl w-80"
        >
          <h3 className="text-white font-semibold mb-4 text-lg">Your Browser Info</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FaDesktop className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">Browser</p>
                <p className="text-white">{browserData.browser}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaDesktop className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">Operating System</p>
                <p className="text-white">{browserData.os}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaDesktop className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">Screen Resolution</p>
                <p className="text-white">{browserData.screenResolution}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaGlobe className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">Language</p>
                <p className="text-white">{browserData.language}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaClock className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">Timezone</p>
                <p className="text-white">{browserData.timezone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">Status</p>
                <p className="text-white flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${browserData.onlineStatus ? 'bg-green-400' : 'bg-red-400'}`} />
                  {browserData.onlineStatus ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="mt-4 w-full px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors"
          >
            Close
          </button>
        </motion.div>
      )}
    </div>
  );
}
