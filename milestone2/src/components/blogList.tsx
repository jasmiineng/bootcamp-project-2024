import React from 'react';
import styles from '@/components/blogPreview.module.css';
import blogs from '@/app/static/blogData'; // Import blogs array
import BlogPreview from '@/components/blogPreview'; // Import BlogPreview component

// BlogList Component to render a list of BlogPreview components
export default function BlogList() {
  return (
    <div className={styles.blogContainer}>
      {blogs.map((blog, index) => (
        <BlogPreview key={index} blog={blog} />
      ))}
    </div>
  );
}
