import React from "react";
import Image from "next/image"; 
import Footer from "@/components/footer";
import styles from "@/app/blog/blog1/page.module.css"; 

export default function Blog1() {
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
          <h1 className={styles.blogTitle}>First Blog Ever!</h1>
          <div className={styles.blogImage}>
            <a
              href="https://www.linkedin.com/in/jasmineng3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/minionsthree.png"
                alt="A picture of three minions looking up in awe."
                width={600}
                height={350}
              />
            </a>
          </div>
          <div className={styles.blogInfo}>
            <p>
              Hello World! I have nothing to write about, so click the minions
              to go to my LinkedIn!
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
