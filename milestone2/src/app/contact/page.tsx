import React from "react";
import Footer from "@/components/footer"; 
import styles from "@/app/contact/page.module.css"; 

export default function Contact() {
  return (
    <main>
      {/* Page Title */}
      <h1 className={styles.pageTitle}>Contact Me!</h1>
      <div className={styles.contactContainer}>
        {/* Contact Form */}
        <form className={styles.contactForm}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input type="text" id="name" className={styles.input} />

          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input type="email" id="email" className={styles.input} />

          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea id="message" className={styles.textarea}></textarea>

          <input
            type="submit"
            value="Submit"
            className={styles.submitButton}
          />
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
