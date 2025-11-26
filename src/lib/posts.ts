import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/data/posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
}

export function getAllPosts(): Post[] {
  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || '',
          date: data.date || '',
          excerpt: data.excerpt || '',
          content,
          author: data.author || 'Anonymous',
          tags: data.tags || [],
        } as Post;
      });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
      author: data.author || 'Anonymous',
      tags: data.tags || [],
    };
  } catch (error) {
    console.error('Error reading post:', error);
    return null;
  }
}
