import React from "react";
import Footer from "@/components/footer";
import styles from "@/app/resume/page.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={styles.pageTitle}>Resume</h1>
      <div className={styles.resume}>


        {/* Education Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              California Polytechnic State University, San Luis Obispo
            </h3>
            <p className={styles.entryInfo}>B.S. in Computer Engineering</p>
            <p className={styles.entryInfo}>Expected May 2027</p>
            <p className={styles.entryInfo}>
              Cumulative GPA: 3.598/4.0; Dean’s Honors List Fall 2023, Winter
              2024, Summer 2024
            </p>
          </div>
        </section>

        {/* Coursework Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Coursework</h2>
          <ul className={styles.courseList}>
            <li>CSC 202: Data Structures</li>
            <li>CSC 203: Object-Oriented Programming & Design</li>
            <li>CPE 225: Intro to Computer Organization</li>
            <li>CPE 133: Digital Design</li>
            <li>CPE 233: Computer Design & Assembly Language Programming</li>
            <li>MATH 241: Calculus IV</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <ul className={styles.skillList}>
            <li>Python</li>
            <li>RISC-V</li>
            <li>SystemVerilog</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Cal Poly Racing</h3>
            <p className={styles.entryInfo}>Electronics Team Member</p>
            <ul className={styles.entryDescription}>
              <li>
                Conducted comprehensive fan testing for both e-car and c-car
              </li>
              <li>Developed Python unit tests for BMS system interfacing with C++</li>
              <li>Created circuit board by soldering components</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Rock, Paper, Scissors Game</h3>
            <p className={styles.entryInfo}>
              Rock, Paper, Scissors Game in SystemVerilog with purpose to play
              on a BASYS-3 board.
            </p>
            <ul className={styles.entryDescription}>
              <li>Created high & low-level box diagrams</li>
              <li>Included scoreAccumulator, downCounter, clockDivider</li>
              <li>Designed own finite state machine</li>
            </ul>
          </div>
        </section>

        {/* Resume Download Link */}
        <a href="/Resume.pdf" download>
          Download Resume
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}






/*
export default function Home() {
    return (
        <html>
            <head>
                <title>
                    Jasmine Ng's Resume
                </title>
                <link rel="stylesheet" href="styles.css" />
            </head>
            <body>
                <nav className="navbar">
                    <h1 className="logo">
                        <a href="index.html">Jasmine Ng</a>
                    </h1>
                    <ul className="nav-list">
                        <li><a href="index.html">About</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="resume.html">Resume</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
                <main>
                    <h1 className="page-title">Resume</h1>
                    <div className="resume">
                        <section className="section">
                            <h2 className="section-title">Education</h2>
                            <div className="entry">
                                <h3 className="entry-title">California Polytechnic State University, San Luis Obispo</h3>
                                <p className="entry-info">B.S. in Computer Engineering</p>
                                <p className="entry-info">Expected May 2027</p>
                                <p className="entry-info">Cumulative GPA: 3.598/4.0; Dean’s Honors List Fall 2023, Winter 2024, Summer 2024</p>
                            </div>
                        </section>
                        <section className="section">
                            <h2 className="section-title">Coursework</h2>
                            <ul className="course-list">
                                <li>CSC 202: Data Structures</li>
                                <li>CSC 203: Object-Oriented Programming & Design</li>
                                <li>CPE 225: Intro to Computer Organization</li>
                                <li>CPE 133: Digital Design</li>
                                <li>CPE 233: Computer Design & Assembly Language Programming</li>
                                <li>MATH 241: Calculus IV</li>
                            </ul>
                        </section>
                        <section className="section">
                            <h2 className="section-title">Skills</h2>
                            <ul className="skill-list">
                                <li>Python</li>
                                <li>Risc-V</li>
                                <li>SystemVerilog</li>
                            </ul>
                        </section>
                        <section className="section">
                            <h2 className="section-title">Experience</h2>
                            <div className="entry">
                                <h3 className="entry-title">Cal Poly Racing</h3>
                                <p className="entry-info">Electronics Team Member</p>
                                <p className="entry-description">
                                    <ul>
                                        <li>Conducted comprehensive fan testing for both e-car and c-car</li>
                                        <li>Develop Python unit tests for BMS system interfacing with C++</li>
                                        <li>Created circuit board by soldering componenets</li>
                                    </ul>
                                </p>
                            </div>
                        </section>
                        <section className="section">
                            <h2 className="section-title">Projects</h2>
                            <div className="entry">
                                <h3 className="entry-title">Rock, Paper, Scissors Game</h3>
                                <p className="entry-info">Rock, Paper, Scissors Game in SystemVerilog with purpose to play on a BASYS-3 board.</p>
                                <p className="entry-description">
                                    <ul>
                                        <li>Created high & low level box diagrams</li>
                                        <li>Included scoreAccumulator, downCounter, clockDivider</li>
                                        <li>Designed own finite state machine</li>
                                    </ul>
                                </p>
                            </div>
                        </section>
                        <a href="Resume.pdf" download>Download Resume</a>
                    </div>
                </main>
                <footer className="footer">© 2024 Jasmine Ng Personal Website | All Rights Reserved</footer>
            </body>
        </html>
    );
  }
*/