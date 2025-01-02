import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/projects/projectPreview.module.css";

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  comments?: {
    user: string;
    content: string;
    time: string;
  }[];
};

export default function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={styles.project}>
      <Link href={`/project/${project.slug}`}>
        <Image
          src={project.image}
          alt={project.imageAlt || "Project Image"}
          width={300}
          height={200}
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
  );
}
