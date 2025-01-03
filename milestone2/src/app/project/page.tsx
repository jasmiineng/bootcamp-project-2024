import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import styles from "@/app/project/page.module.css";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";

// Define the type for project objects
type ProjectType = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default async function Portfolio() {
  try {
    await connectDB();

    // Fetch projects from the database
    const projects = await ProjectModel.find().sort({ date: 1 }).orFail();

    if (!projects || projects.length === 0) {
      console.log("No projects found in the database.");
      throw new Error("No projects found.");
    }

    // Transform project data
    const transformedProjects: ProjectType[] = projects.map((project) => ({
      slug: project.slug,
      title: project.title,
      description: project.description,
      image: project.image || "/placeholder-image.jpg", // Fallback image
      imageAlt: project.imageAlt || "Project Image", // Ensure consistent naming
    }));

    return (
      <main>
        <nav className={styles.navbar}></nav>
        <div className={styles.projectContainer}>
          <h1 className={styles.pageTitle}>Projects</h1>
          {transformedProjects.map((project) => (
            <div key={project.slug} className={styles.project}>
              <Link href={`/project/${project.slug}`}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={500} // Replace with actual width
                  height={300} // Replace with actual height
                  className={styles.projectImage}
                  priority
                />
              </Link>
              <div className={styles.projectDetails}>
                <p className={styles.projectName}>{project.title}</p>
                <p className={styles.projectDescription}>{project.description}</p>
                <Link href={`/project/${project.slug}`} className={styles.learnMore}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    );
  } catch (error) {
    console.error("Error fetching projects:", error);

    return (
      <main>
        <div className={styles.projectContainer}>
          <h1 className={styles.pageTitle}>Projects</h1>
          <p>Unable to load projects at this time. Please try again later.</p>
        </div>
        <Footer />
      </main>
    );
  }
}






/*
import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import styles from "@/app/project/page.module.css";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";

export default async function Portfolio() {
  try {
    await connectDB();

    // Fetch projects from the database
    const projects = await ProjectModel.find().sort({ date: 1 }).orFail();

    if (!projects || projects.length === 0) {
      console.log("No projects found in the database.");
      throw new Error("No projects found.");
    }

    // Transform project data
    const transformedProjects = projects.map((project: any) => ({
      slug: project.slug,
      title: project.title,
      description: project.description,
      image: project.image || "/placeholder-image.jpg", // Fallback image
      imageAlt: project.imageAlt || "Project Image", // Ensure consistent naming
    }));

    return (
      <main>
        <nav className={styles.navbar}>
        </nav>
        <div className={styles.projectContainer}>
          <h1 className={styles.pageTitle}>Projects</h1>
          {transformedProjects.map((project: any) => (
            <div key={project.slug} className={styles.project}>
              <Link href={`/project/${project.slug}`}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width="500"
                  height="300"
                  className={styles.projectImage}
                />
              </Link>
              <div className={styles.projectDetails}>
                <p className={styles.projectName}>{project.title}</p>
                <p className={styles.projectDescription}>{project.description}</p>
                <Link href={`/project/${project.slug}`} className={styles.learnMore}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    );
  } catch (error) {
    console.error("Error fetching projects:", error);

    return (
      <main>
        <div className={styles.projectContainer}>
          <h1 className={styles.pageTitle}>Projects</h1>
          <p>Unable to load projects at this time. Please try again later.</p>
        </div>
        <Footer />
      </main>
    );
  }
}
*/






/*
import React from "react";
import Link from "next/link";
import Footer from "@/components/footer"; 
import styles from "@/app/project/page.module.css"; 


export default function Portfolio() {
  return (
    <main>
      <nav className={styles.navbar}>
      </nav>
    <div className={styles.projectContainer}>
      <h1 className={styles.pageTitle}>Projects</h1>
      <div className={styles.project}>
        <Link href="/">
          <img
            src="/minionwebsite.png"
            alt="A picture of a confused Minion"
            width="500"
            height="300"
            className={styles.projectImage}
          />
        </Link>
        <div className={styles.projectDetails}>
          <p className={styles.projectName}>My Personal Website</p>
          <p className={styles.projectDescription}>
            Utilized Hack4Impact's Starter Pack
          </p>
          <a href="/" className={styles.learnMore}>
            Learn More
          </a>
        </div>
      </div>
      </div>
      <Footer />
    
    </main>
  );
}
*/