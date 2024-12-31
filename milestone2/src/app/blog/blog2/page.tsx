import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import styles from "@/app/blog/blog2/page.module.css";

export default function Blog2() {
  return (
    <main>
    <div className={styles.blogPage}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <h1 className={styles.logo}></h1>
      </nav>

      {/* Blog Content */}
      <div className={styles.blogContainer}>
        <div className={styles.blogPost}>
          <h1 className={styles.blogTitle}>My Second Blog!</h1>
          <div className={styles.blogImage}>
            <Image
              src="/minionsdad.png"
              alt="A picture of a professionally dressed minion looking serious."
              width={300}
              height={450}
            />
          </div>
          <div className={styles.blogInfo}>
            <p>
              Hello again World! I have nothing to report, besides that my
              classes are really difficult right now.
            </p>
          </div>
        </div>
      </div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
