'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

// Sample blog posts
const blogPosts = [
  {
    slug: 'getting-started-with-modern-web',
    title: 'Getting Started with Modern Web Development',
    excerpt: 'Learn the essentials of modern web development with Next.js, React, and TypeScript. This comprehensive guide covers everything from setup to deployment.',
    date: '2024-11-20',
    author: 'Sarah Johnson',
    tags: ['Web Development', 'Next.js', 'React', 'TypeScript'],
  },
  {
    slug: 'building-scalable-applications',
    title: 'Building Scalable Applications',
    excerpt: 'Best practices for building applications that scale with your business needs. Learn about architecture patterns, microservices, and cloud deployment strategies.',
    date: '2024-11-15',
    author: 'Mike Chen',
    tags: ['Architecture', 'Scalability', 'Cloud'],
  },
  {
    slug: 'ui-ux-design-trends-2024',
    title: 'UI/UX Design Trends 2024',
    excerpt: 'Explore the latest design trends shaping the digital landscape this year. From minimalism to bold colors, discover the hottest trends in design.',
    date: '2024-11-10',
    author: 'Emily Davis',
    tags: ['Design', 'UI/UX', 'Trends'],
  },
  {
    slug: 'mastering-framer-motion',
    title: 'Mastering Framer Motion for React',
    excerpt: 'Create stunning animations with Framer Motion. Learn advanced techniques for creating smooth, performant animations in your React applications.',
    date: '2024-11-05',
    author: 'Alex Turner',
    tags: ['Animation', 'React', 'Framer Motion'],
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for 2024',
    excerpt: 'Enhance your TypeScript skills with these proven best practices. Write safer, more maintainable code with proper typing and error handling.',
    date: '2024-10-30',
    author: 'Sarah Johnson',
    tags: ['TypeScript', 'Best Practices', 'Code Quality'],
  },
  {
    slug: 'serverless-architecture-guide',
    title: 'Complete Guide to Serverless Architecture',
    excerpt: 'Dive deep into serverless computing. Learn when to use serverless, how to architect your applications, and best practices for production deployments.',
    date: '2024-10-25',
    author: 'Mike Chen',
    tags: ['Serverless', 'Cloud', 'Architecture'],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Insights, tutorials, and industry news to help you stay ahead in the digital world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

                  <h2 className="text-xl font-semibold text-white mb-2">
                    {post.title}
                  </h2>
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
        </div>
      </div>

      <Footer />
    </div>
  );
}
