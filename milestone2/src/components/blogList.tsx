import React from 'react';
import styles from '@/components/blogPreview.module.css';
import BlogPreview from '@/components/blogPreview';
import BlogModel, { BlogWithId } from '@/database/blogSchema';
import mongoose from 'mongoose';

// BlogList Component to render a list of BlogPreview components
export default function BlogList({ blogs }: { blogs: BlogWithId[] }) {
  // Transform blogs to match the expected Blog type
  const transformedBlogs = blogs.map((blog) => ({
    ...blog,
    _id: blog._id.toString(), // Convert ObjectId to string
    date: blog.date.toISOString(), // Convert Date to string
    comments: blog.comments.map((comment) => ({
      ...comment,
      time: comment.time.toISOString(), // Convert Date to string
    })),
  }));

  return (
    <div className={styles.blogContainer}>
      {transformedBlogs.map((blog) => (
        <BlogPreview key={blog._id} blog={blog} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  // Connect to MongoDB
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGODB_URI || '');
  }

  // Fetch blogs from the database
  const blogs = await BlogModel.find()
    .lean<BlogWithId[]>(); // Explicitly type the result as BlogWithId[]

  // Transform `_id` to string for frontend
  const transformedBlogs = blogs.map((blog) => ({
    ...blog,
    _id: blog._id.toString(), // Convert ObjectId to string
    date: blog.date.toISOString(), // Convert Date to string
    comments: blog.comments.map((comment) => ({
      ...comment,
      time: comment.time.toISOString(), // Convert Date to string
    })),
  }));

  return {
    props: {
      blogs: transformedBlogs,
    },
  };
}





/*
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
*/