'use client';

import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import BlogPreview from '@/components/BlogPreview';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BrowserInfo from '@/components/BrowserInfo';
import HomeComponent from '@/components/Home';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black-900 to-black">
      {/* <Navigation /> */}
      {/* <Hero /> */}
      <HomeComponent />
      {/* <Features /> */}
      {/* <About /> */}
      {/* <BlogPreview /> */}
      {/* <Contact /> */}
      {/* <BrowserInfo /> */}
      {/* <Footer /> */}
    </div>
  );
}
