"use client";

import React, { useState } from "react";
import Footer from "@/components/footer";
import styles from "@/app/contact/page.module.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form inputs
    if (!name || !email || !message) {
      setStatusMessage("All fields are required.");
      return;
    }

    // EmailJS configuration
    const serviceID = "service_yf50vu5";
    const templateID = "template_bq0pe26";
    const publicKey = "YdFIiKm4rPx6kYNPX";

    // Template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Jasmine",
      message,
    };

    console.log("Sending email with the following parameters:", {
      serviceID,
      templateID,
      templateParams,
      publicKey,
    });

    setIsLoading(true);
    setStatusMessage("Sending email...");

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setStatusMessage("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatusMessage("Failed to send email. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main>
      {/* Page Title */}
      <h1 className={styles.pageTitle}>Contact Me!</h1>
      <div className={styles.contactContainer}>
        {/* Contact Form */}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <input
            type="submit"
            value={isLoading ? "Sending..." : "Submit"}
            className={styles.submitButton}
            disabled={isLoading}
          />
        </form>
        {statusMessage && (
          <p className={styles.statusMessage}>{statusMessage}</p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
