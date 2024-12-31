import React from 'react';
import styles from "@/app/blog/page.module.css";
import { blogs } from '@/app/static/blogData'; // Import your blog data
import BlogPreview from '@/components/blogPreview'; // Import the BlogPreview component
import Footer from "@/components/footer";


export default function BlogPage() {
  return (
    <main>
    <div className={styles.blogPage}>
      <div className={styles.blogList}>
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
    <Footer />
    </main>
  );
}
