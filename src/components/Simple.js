import React from "react";
import styles from "./Simple.module.css";
import portrait from "../assets/Portrait.jpg";
import emailIcon from "../assets/contact/Email.png";
import githubIcon from "../assets/contact/Github.png";
import linkedinIcon from "../assets/contact/LinkedIn.png";

export default function Simple() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img className={styles.portrait} src={portrait} alt="portrait" />
        <div className={styles.contact}>
          <div className={styles.media}>
            <a
              href="mailto:udy.ding@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={emailIcon} alt="email" />
            </a>
            <a
              href="https://www.linkedin.com/in/udy-ding/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={linkedinIcon} alt="linkedin" />
            </a>
            <a
              href="http://github.com/udyding"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={githubIcon} alt="github" />
            </a>
          </div>
          <div className={styles.resume}>
            <a
              href="Udy Ding Resume Summer 2022.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Resume</button>
            </a>
          </div>

          <div className={styles.resume}></div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Hi there! I'm Udy.</div>
        <div className={styles.description}>
          I’m a computer science student at UWaterloo and an incoming SWE intern
          at{" "}
          <a
            href="https://www.wish.com/companyinfo?hide_login_modal=true"
            rel="noopener noreferrer"
            target="_blank"
            style={{
              fontWeight: "800",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Wish
          </a>
          . Previously, I interned at OpenText working on their{" "}
          <a
            href="https://www.opentext.com/products-and-solutions/products/opentext-core-share"
            rel="noopener noreferrer"
            target="_blank"
            style={{
              fontWeight: "800",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Core Share
          </a>{" "}
          software.
          <br />
          <br />
          Programming is my outlet for creating interesting solutions to
          everyday problems. What I could once only accomplish by reaching out
          locally, I can now translate to apps anyone can access.
          <br />
          <br />
          Some things I am currently working on are: mastering dorm cooking,
          learning new tech, and getting a pet hedgehog.
          <br />
          <br />
          <span style={{ fontWeight: "800" }}>
            I am currently looking for Summer and Fall 2022 opportunities!
          </span>{" "}
          If you’d like to chat, please feel free to reach out.
        </div>
      </div>
    </div>
  );
}
