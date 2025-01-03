import style from "./page.module.css";
import Footer from "@/components/footer";
import Comment from "@/components/projects/comment";
import NewComment from "@/components/projects/newComment";
import React from "react";
import Image from "next/image";

// Type definitions
type CommentType = {
  user: string;
  content: string;
  time: Date; 
};

type ProjectType = {
  title: string;
  image: string;
  imageAlt?: string;
  description: string;
  comments: CommentType[];
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Function to fetch project data
async function getProject(slug: string): Promise<ProjectType | null> {
  try {
    const res = await fetch(
      `https://bootcamp-project-2024-phi.vercel.app/api/Projects/${slug}`,
      {
        cache: "no-store",
      }
    );

    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    return res.json();
  } catch (err: unknown) {
    console.error(`Error fetching project: ${err}`);
    return null;
  }
}

export default async function Project({ params }: Props) {
  try {
    const resolvedParams = await params; // Await the params object
    const { slug } = resolvedParams; // Now destructure the slug
    console.log("SLUG passed to getProject:", slug);

    const project = await getProject(slug);
    console.log("Fetched Project:", project);

    // Handle case where project is not found
    if (!project) {
      return (
        <div className={style.errorPage}>
          <h1 className={style.pageTitle}>404 - Project Not Found</h1>
        </div>
      );
    }

    return (
      <div className={style.projectPage}>
        <div className={style.info}>
          <div className={style.projectContent}>
            <h1 className={style.title}>{project.title}</h1>
            <Image
              className={style.photo}
              src={project.image}
              alt={project.imageAlt || "Project Image"}
              width={800} // Adjust width as needed
              height={400} // Adjust height as needed
              priority
            />
            <p className={style.description}>{project.description}</p>
          </div>

          <div className={style.commentSection}>
            <h2 className={style.commentTitle}>COMMENT SECTION</h2>
            <div className={style.commentList}>
              {project.comments.map((comment, index) => (
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
    console.error("Error rendering the project page:", error);
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
import style from "./page.module.css";
import Footer from "@/components/footer";
import Comment from "@/components/projects/comment"; 
import NewComment from "@/components/projects/newComment"; 
import React from "react";


// Type definitions
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Function to fetch project data
async function getProject(slug: string) {
  try {
    //const res = await fetch(`http://localhost:3000/api/Projects/${slug}`, {
    const res = await fetch(`https://bootcamp-project-2024-phi.vercel.app//api/Projects/${slug}`, {
      cache: "no-store",
    });

    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    return res.json();
  } catch (err: unknown) {
    console.error(`Error fetching project: ${err}`);
    return null;
  }
}

export default async function Project({ params }: Props) {
  try {
    const slug = (await params).slug;
    console.log("SLUG passed to getProject:", slug);

    const project = await getProject(slug);
    console.log("Fetched Project:", project);

    // Handle case where project is not found
    if (!project) {
      return (
        <div className={style.errorPage}>
          <h1 className={style.pageTitle}>404 - Project Not Found</h1>
        </div>
      );
    }

    return (
      <div className={style.projectPage}>
        <div className={style.info}>
          <div className={style.projectContent}>
            <h1 className={style.title}>{project.title}</h1>
            <img
              className={style.photo}
              src={project.image}
              alt={project.imageAlt || "Project Image"}
            />
            <p className={style.description}>{project.description}</p>
          </div>

          <div className={style.commentSection}>
            <h2 className={style.commentTitle}>COMMENT SECTION</h2>
            <div className={style.commentList}>
              {project.comments.map((comment: any, index: number) => (
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
    console.error("Error rendering the project page:", error);
    return (
      <div className={style.errorPage}>
        <h1 className={style.pageTitle}>
          An error occurred. Please try again later.
        </h1>
      </div>
    );
  }
}
*/