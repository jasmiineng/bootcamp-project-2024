import React from 'react';
import styles from "@/app/blog/page.module.css";
import BlogPreview from '@/components/blogPreview'; // Import the BlogPreview component
import Footer from "@/components/footer";
import connectDB from '@/database/db'; // Use your connectDB utility
import BlogModel from '@/database/blogSchema'; // Import Blog model and types


export default async function BlogPage() {
    try {
        
      await connectDB();
  
      const blogs = await BlogModel.find().sort({ date: 1 }).orFail(); //1 for earliest blog first; -1 for most recent blog first
  
      if (!blogs || blogs.length === 0) {
        console.log("No blogs found in the database.");
        throw new Error("No blogs found.");
      }
  
      // Transform data

      const transformedBlogs = blogs.map((blog: any) => ({
        //_id: blog._id.toString(),
        slug: blog.slug,
        title: blog.title,
        description: blog.description,
        date: blog.date.toISOString(),
        image: blog.image || "/placeholder-image.jpg", // Fallback image
        image_alt: blog.image_alt || "Blog Image",
      }));
      
  
      //console.log("Step 5: Blogs transformed:", transformedBlogs);
  
      return (
        <main>
          <div className={styles.blogPage}>
            <div className={styles.blogList}>
              {transformedBlogs.map((blog:any) => (
                <BlogPreview key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
          <Footer />
        </main>
      );
    } catch (error) {
      console.error("Error fetching blogs:", error);
  
      return (
        <main>
          <div className={styles.blogPage}>
            <h1>Unable to load blogs at this time. Please try again later.</h1>
          </div>
          <Footer />
        </main>
      );
    }
  }
  












/*
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
*/
