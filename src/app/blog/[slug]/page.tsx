'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FaCalendar, FaUser, FaArrowLeft, FaTag } from 'react-icons/fa';

// Sample blog posts data
interface BlogPost {
  title: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
}

const blogPosts: { [key: string]: BlogPost } = {
  'getting-started-with-modern-web': {
    title: 'Getting Started with Modern Web Development',
    date: '2024-11-20',
    author: 'Sarah Johnson',
    tags: ['Web Development', 'Next.js', 'React', 'TypeScript'],
    content: `
# Getting Started with Modern Web Development

Modern web development has evolved significantly over the past few years. With frameworks like Next.js, React, and TypeScript, developers can build powerful, scalable applications faster than ever before.

## Why Next.js?

Next.js provides an excellent developer experience with features like:

- **Server-Side Rendering (SSR)**: Improve SEO and initial page load performance
- **Static Site Generation (SSG)**: Generate static pages at build time
- **API Routes**: Build your backend alongside your frontend
- **File-based Routing**: Intuitive routing based on your file structure

## Getting Started

To create a new Next.js project with TypeScript and Tailwind CSS:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind
cd my-app
npm run dev
\`\`\`

## Key Concepts

### Components
React components are the building blocks of your application. They allow you to break down your UI into reusable pieces.

### State Management
Use React hooks like \`useState\` and \`useEffect\` to manage component state and side effects.

### Styling
Tailwind CSS provides utility-first CSS classes that make styling fast and consistent.

## Best Practices

1. **Use TypeScript**: Catch errors early and improve code quality
2. **Optimize Images**: Use Next.js Image component for automatic optimization
3. **Code Splitting**: Lazy load components to improve performance
4. **SEO**: Use Next.js metadata API for better search engine optimization

## Conclusion

Modern web development tools like Next.js make it easier than ever to build fast, scalable applications. Start your journey today!
    `,
  },
  'building-scalable-applications': {
    title: 'Building Scalable Applications',
    date: '2024-11-15',
    author: 'Mike Chen',
    tags: ['Architecture', 'Scalability', 'Cloud'],
    content: `
# Building Scalable Applications

Scalability is crucial for modern applications. Learn how to design and build applications that can handle growth.

## Architecture Patterns

### Microservices
Break your application into smaller, independent services that can be developed, deployed, and scaled independently.

### Event-Driven Architecture
Use events to communicate between services, enabling loose coupling and better scalability.

### Caching Strategies
Implement caching at multiple levels to reduce database load and improve response times.

## Cloud Deployment

### Auto-Scaling
Configure your infrastructure to automatically scale based on demand.

### Load Balancing
Distribute traffic across multiple servers to ensure high availability.

### CDN Integration
Use Content Delivery Networks to serve static assets from locations closer to your users.

## Best Practices

1. Design for failure
2. Monitor everything
3. Automate deployments
4. Use containerization
5. Implement proper logging

Start building scalable applications today!
    `,
  },
  'ui-ux-design-trends-2024': {
    title: 'UI/UX Design Trends 2024',
    date: '2024-11-10',
    author: 'Emily Davis',
    tags: ['Design', 'UI/UX', 'Trends'],
    content: `
# UI/UX Design Trends 2024

The design landscape is constantly evolving. Here are the top trends shaping digital experiences in 2024.

## Top Trends

### 1. Minimalism 2.0
Clean interfaces with purposeful use of white space and typography.

### 2. Bold Typography
Large, eye-catching fonts that make a statement.

### 3. Dark Mode Everything
More apps and websites offering dark mode as a standard feature.

### 4. Micro-Interactions
Small animations that provide feedback and enhance user experience.

### 5. 3D Elements
Subtle use of 3D graphics to add depth and interest.

## Design Principles

- **Accessibility First**: Design for all users
- **Mobile-First**: Start with mobile design
- **Performance**: Optimize for speed
- **Consistency**: Maintain design system standards

Stay ahead of the curve with these design trends!
    `,
  },
  'mastering-framer-motion': {
    title: 'Mastering Framer Motion for React',
    date: '2024-11-05',
    author: 'Alex Turner',
    tags: ['Animation', 'React', 'Framer Motion'],
    content: `
# Mastering Framer Motion for React

Framer Motion is a powerful animation library for React. Learn how to create stunning animations with ease.

## Getting Started

Install Framer Motion:

\`\`\`bash
npm install framer-motion
\`\`\`

## Basic Animations

Use the \`motion\` component for simple animations:

\`\`\`jsx
import { motion } from 'framer-motion';

function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Hello World
    </motion.div>
  );
}
\`\`\`

## Advanced Techniques

- **Variants**: Organize animations
- **Gestures**: Add hover and tap interactions
- **Layout Animations**: Smooth layout transitions
- **Scroll Animations**: Trigger animations on scroll

Create amazing user experiences with Framer Motion!
    `,
  },
  'typescript-best-practices': {
    title: 'TypeScript Best Practices for 2024',
    date: '2024-10-30',
    author: 'Sarah Johnson',
    tags: ['TypeScript', 'Best Practices', 'Code Quality'],
    content: `
# TypeScript Best Practices for 2024

Write better TypeScript code with these proven best practices.

## Type Safety

### Use Strict Mode
Enable strict mode in your \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

### Avoid \`any\`
Use proper types instead of \`any\` to maintain type safety.

## Code Organization

1. Use interfaces for object shapes
2. Create custom types for complex structures
3. Organize types in separate files
4. Use generics for reusable components

## Error Handling

Properly type your errors and handle them gracefully.

Level up your TypeScript skills!
    `,
  },
  'serverless-architecture-guide': {
    title: 'Complete Guide to Serverless Architecture',
    date: '2024-10-25',
    author: 'Mike Chen',
    tags: ['Serverless', 'Cloud', 'Architecture'],
    content: `
# Complete Guide to Serverless Architecture

Serverless computing allows you to build and run applications without managing servers.

## Benefits

- **Cost-Effective**: Pay only for what you use
- **Scalable**: Automatic scaling
- **Less Maintenance**: No server management
- **Faster Development**: Focus on code, not infrastructure

## Popular Platforms

- AWS Lambda
- Google Cloud Functions
- Azure Functions
- Vercel Functions

## Use Cases

1. API backends
2. Data processing
3. Scheduled tasks
4. Event-driven applications

## Best Practices

- Keep functions small and focused
- Optimize cold starts
- Monitor performance
- Implement proper error handling

Start building serverless applications today!
    `,
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-purple-400 hover:text-purple-300"
              >
                ← Back to Blog
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8"
              >
                <FaArrowLeft />
                Back to Blog
              </motion.button>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <FaCalendar className="text-purple-400" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="text-purple-400" />
                <span>{post.author}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                >
                  <FaTag className="text-xs" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-invert prose-purple max-w-none">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
                <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {post.content}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-8 border-t border-purple-500/20"
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
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
