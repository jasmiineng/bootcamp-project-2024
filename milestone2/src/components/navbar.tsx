import React from "react";
import Link from "next/link";
import styles from "@/components/navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarRoot}>
      <header className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">Jasmine Ng</Link>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link className={styles.navLink} href="/">
                About
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/project">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/resume">
                Resume
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}