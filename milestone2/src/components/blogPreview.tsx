import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/blogPreview.module.css';

export type Blog = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  image_alt?: string; // Optional in case it's not always provided
  comments?: {
    user: string;
    content: string;
    time: string;
  }[];
};

export default function BlogPreview({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className={styles.blogLink}>
      <div className={styles.blogContent}>
        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.image_alt || 'Blog Image'} // Fallback for missing alt text
            width={300}
            height={200}
            className={styles.blogImage}
            priority // Optimizes loading for visible content
          />
        ) : (
          <div className={styles.imagePlaceholder}>No Image Available</div> // Placeholder if no image
        )}
        <h2 className={styles.blogName}>{blog.title}</h2>
        <span className={styles.blogDate}>
          {new Date(blog.date).toLocaleDateString()}
        </span>
        <p className={styles.blogDescription}>{blog.description}</p>
      </div>
    </Link>
  );
}















/*
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/blogPreview.module.css';

export type Blog = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  image_alt: string;
  comments: {
    user: string;
    content: string;
    time: string;
  }[];
};

export default function BlogPreview({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className={styles.blogContent}>
        <Image
          src={blog.image}
          alt={blog.image_alt}
          width={300}
          height={200}
          className={styles.blogImage}
        />
        <h2 className={styles.blogName}>{blog.title}</h2>
        <span className={styles.Date}>{new Date(blog.date).toLocaleDateString()}</span>
        <p className={styles.blogDescription}>{blog.description}</p>
      </div>
    </Link>
  );
}
*/






/*
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/blogPreview.module.css';
import { Blog } from "@/app/static/blogData";

export default function BlogPreview({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
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
    </Link>
  );
}
*/





/*
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
*/

  