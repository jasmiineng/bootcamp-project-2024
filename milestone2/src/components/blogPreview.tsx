import React from 'react';
import Image from 'next/image';
import styles from '@/components/blogPreview.module.css';
import { Blog } from "@/app/static/blogData";

export default function BlogPreview({ blog }: { blog: Blog }) {
    return (
        <a href={blog.slug} className={styles.blogLink}>
            <div className={styles.blogContent}>
                <Image
                    src={blog.image} 
                    alt={blog.imageAlt} 
                    width={300} 
                    height={200} 
                    className={styles.blogImage} 
                />
                <h2 className={styles.blogName}>{blog.name}</h2>
                <span className={styles.Date}>{blog.date}</span>
                <p className={styles.blogDescription}>{blog.description}</p>
            </div>
        </a>
    );
}


  

/*
export default function BlogPreview({blog}: {blog:Blog}) {
  return (
    <div className={styles.blogContent}>
        <h3 className={styles.blogName}>{blog.name}</h3>
      <Image
        src={blog.image}
        alt={blog.imageAlt}
        width={500}
        height={500}
        className={styles.blogImage}
      /> 
      <p className={styles.Date}>{blog.date}</p>
      <p className={styles.blogDescription}>{blog.description}</p>
      <a href={blog.slug} className={styles.blogLink}>
      </a>
      </div>
    
  );
}
*/