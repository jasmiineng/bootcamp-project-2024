import React from "react";
import Link from "next/link";
import Footer from "@/components/footer"; 
import styles from "@/app/portfolio/page.module.css"; 


export default function Portfolio() {
  return (
    <main>
      {/* Navigation */}
      <nav className={styles.navbar}>
      </nav>
    <div className={styles.projectContainer}>
      {/* Main Content */}
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
      {/* Footer */}
      <Footer />
    
    </main>
  );
}
