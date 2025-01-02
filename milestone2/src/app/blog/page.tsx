import React from 'react';
import styles from "@/app/blog/page.module.css";
import BlogPreview from '@/components/blogPreview'; // Import the BlogPreview component
import Footer from "@/components/footer";
import connectDB from '@/database/db'; // Use your connectDB utility
import BlogModel, { IComment, BlogWithId } from '@/database/blogSchema'; // Import Blog model and types

export default async function BlogPage() {
    try {
      console.log("Step 1: Connecting to MongoDB...");
      await connectDB();
      console.log("Step 2: Connected successfully.");
  
      console.log("Step 3: Fetching blogs from the database...");
      const blogs = await BlogModel.find()
        .select("slug title date description image image_alt comments")
        .lean<BlogWithId[]>();
      console.log("Step 4: Blogs fetched:", blogs);
  
      if (!blogs || blogs.length === 0) {
        console.log("No blogs found in the database.");
        throw new Error("No blogs found.");
      }
  
      // Transform data
      const transformedBlogs = blogs.map((blog) => ({
        ...blog,
        _id: blog._id.toString(),
        date: blog.date.toISOString(),
        comments: blog.comments.map((comment) => ({
          ...comment,
          time: comment.time.toISOString(),
        })),
      }));
  
      console.log("Step 5: Blogs transformed:", transformedBlogs);
  
      return (
        <main>
          <div className={styles.blogPage}>
            <div className={styles.blogList}>
              {transformedBlogs.map((blog) => (
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
