'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaCalendar, FaUser } from 'react-icons/fa';

// Sample blog posts - in a real app, these would come from a CMS or API
const blogPosts = [
  {
    slug: 'getting-started-with-modern-web',
    title: 'Getting Started with Modern Web Development',
    excerpt: 'Learn the essentials of modern web development with Next.js, React, and TypeScript.',
    date: '2024-11-20',
    author: 'Sarah Johnson',
    tags: ['Web Development', 'Next.js', 'React'],
  },
  {
    slug: 'building-scalable-applications',
    title: 'Building Scalable Applications',
    excerpt: 'Best practices for building applications that scale with your business needs.',
    date: '2024-11-15',
    author: 'Mike Chen',
    tags: ['Architecture', 'Scalability'],
  },
  {
    slug: 'ui-ux-design-trends-2024',
    title: 'UI/UX Design Trends 2024',
    excerpt: 'Explore the latest design trends shaping the digital landscape this year.',
    date: '2024-11-10',
    author: 'Emily Davis',
    tags: ['Design', 'UI/UX'],
  },
];

export default function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, tutorials, and industry news to keep you ahead of the curve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-6xl text-purple-400"
                >
                  📝
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="text-purple-400" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUser className="text-purple-400" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    Read More
                    <FaArrowRight />
                  </motion.button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              View All Posts
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
