import React from 'react';
import Image from "next/image";
import styles from "@/app/styles.module.css";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
        <nav className={styles.navbar}>
        <h1 className={styles.logo}></h1>
        <ul className={styles.navList}></ul>
      </nav>
      <h1 className={styles.pageTitle}>Welcome to Jasmine Ng's Website!</h1>
      <div className={styles.about}>
        <div className={styles.aboutImage}>
          <Image
            src="/minions.png"
            alt="A picture of a confused Minion"
            width={200}
            height={300}
          />
        </div>
        <div className={styles.aboutText}>
          <p>
            Hello! I am a second-year Computer Engineering student at{" "}
            <em>California Polytechnic State University, San Luis Obispo</em>.
            I am interested in web development, robotics, and computer
            architecture. In my free time, I enjoy going to the gym, hiking, and
            hanging out with my friends.
          </p>
        </div>
      </div>
      <Footer />
    </main>
    /*
    <div lang="en">
        <header></header>
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>
                <a href="index.html">Jasmine Ng</a>
            </h1>
            <ul className={styles.navList}>
                <li><a href="index.html">About</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        <main>
            <h1 className={styles.pageTitle}>Welcome to Jasmine Ng's Website!</h1>
            <div className={styles.about}>
                <div className={styles.aboutImage}>
                    <Image src="/minions.png" alt="A picture of a confused Minion" width="200" height="300"> </Image>
                </div>
                <div className={styles.aboutText}>
                    <p>Hello! I am a second-year Computer Engineering student at <em>California Polytechnic State University, San Luis Obispo</em>. I am interested in web development, robotics, and computer architecture. In my free time, I enjoy going to the gym, hiking, and hanging out with my friends.</p>
                </div>
            </div>
        </main>
        <footer className={styles.footer}> © 2024 Jasmine Ng Personal Website | All Rights Reserved </footer>
    </div>
    */
  );
}
