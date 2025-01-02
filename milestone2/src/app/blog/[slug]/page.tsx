import style from "./page.module.css";
import Comment from "@/components/blogs/comment";
import NewComment from "@/components/blogs/newComment";
import Footer from "@/components/footer";
import BlogModel from "@/database/blogSchema";
import mongoose from "mongoose";
import React from "react";

// Type definitions

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
      cache: "no-store",
    });
    console.log("resopnce1.  ", res);
    // console.log(res)
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    console.log("resopnce2.  ", res);
    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

//ur old code
// await connectToDatabase(); // Ensure database connection
// const blog = await BlogModel.findOne({ slug }).lean();

// if (blog) {
//   return {
//     ...blog,
//     _id: blog._id.toString(), // Convert ObjectId to string
//     date: blog.date.toISOString(), // Convert Date to string
//     comments: blog.comments.map((comment: any) => ({
//       ...comment,
//       time: comment.time.toISOString(), // Convert Date to string
//     })),
//   };
// }

// return null; // Return null if no blog is found

export default async function Blog({ params }: Props) {
  try {
    const slug = (await params).slug;
    console.log("SLUG passed to getBlog:", slug);
    //

    const blog = await getBlog(slug);
    console.log("Fetched Blog:", blog);
    //console.log(blog.slug)
    //console.log("SLUG.            ",slug)
    // const blog = await getBlog(params.slug);

    // Handle case where blog is not found
    if (!blog) {
      return (
        <div className={style.errorPage}>
          <h1 className={style.pageTitle}>404 - Blog Not Found</h1>
        </div>
      );
    }

    return (
      <div className={style.blogPage}>
        <div className={style.info}>
          <div className={style.blogContent}>
            <h1 className={style.title}>{blog.title}</h1>
            <p className={style.date}>
              {new Date(blog.date).toLocaleDateString()}
            </p>
            <img
              className={style.photo}
              src={blog.image}
              alt={blog.image_alt || "Blog Image"}
            />
            <p className={style.description}>{blog.description}</p>
          </div>

          <div className={style.commentSection}>
            <h2 className={style.commentTitle}>COMMENT SECTION</h2>
            <div className={style.commentList}>
              {blog.comments.map((comment: any, index: number) => (
                <Comment key={index} comment={comment} />
              ))}
            </div>
          </div>

          <NewComment slug={slug} />
        </div>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error rendering the blog page:", error);
    return (
      <div className={style.errorPage}>
        <h1 className={style.pageTitle}>
          An error occurred. Please try again later.
        </h1>
      </div>
    );
  }
}

/*
import style from './page.module.css';
import Comment from "@/components/comment";
import NewComment from '@/components/newComment';
import Footer from "@/components/footer";
import { blogs } from "@/app/static/blogData";

type commentType = {
  user: string;
  content: string;
  time: string; // Use string to match with data in `blogData`
};

type Props = {
  params: {
    slug: string;
  };
};

// Function to get the blog based on slug
function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug) || null;
}

export default function Blog({ params }: Props) {
  const blog = getBlog(params.slug);

  // Handle missing blog
  if (!blog) {
    return (
      <div className={style.errorPage}>
        <h1 className={style.pageTitle}>404 - Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className={style.blogPage}>
      <div className={style.info}>
        <div className={style.blogContent}>
          <h1 className={style.title}>{blog.name}</h1>
          <p className={style.date}>{new Date(blog.date).toLocaleDateString()}</p>
          <img
            className={style.photo}
            src={blog.image}
            alt={blog.imageAlt || "Blog Image"}
          />
          <p className={style.description}>{blog.description}</p>
        </div>

        <div className={style.commentSection}>
          <h2 className={style.commentTitle}>COMMENT SECTION</h2>
          <div className={style.commentList}>
            {blog.comments.map((comment, index) => (
              <Comment
                key={index}
                comment={{
                  ...comment,
                  time: new Date(comment.time).toLocaleString(), // Convert time to a readable string
                }}
              />
            ))}
          </div>
        </div>

        <NewComment slug={params.slug} />
      </div>

      <Footer />
    </div>
  );
}
*/
