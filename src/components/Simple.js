import React from "react";
import styles from "./Simple.module.css";
import portrait from "../assets/Portrait.png";

export default function Simple() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img className={styles.portrait} src={portrait} alt="portrait" />
        <div className={styles.contact}>
          <div className={styles.media}>
            <a
              href="Udy_Ding_Resume_10:23 copy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <button>Resume</button>
            </a>
            <a
              href="https://www.linkedin.com/in/udyding/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button>LinkedIn</button>
            </a>
            <a
              href="http://github.com/udyding"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button>Github</button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>
            🌊 <a>Hey! I'm Udy.</a>
          </p>
        </div>
        <div className={styles.description}>
          I’m a 3rd year CS student at UWaterloo and an incoming backend
          engineer intern at{" "}
          <a
            href="https://about.twitter.com/en"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          . In the past, I've worked at{" "}
          <a
            href="https://www.newfront.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Newfront
          </a>
          ,{" "}
          <a
            href="https://www.athelas.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Athelas
          </a>
          , and{" "}
          <a
            href="https://www.wish.com/companyinfo?hide_login_modal=true"
            rel="noopener noreferrer"
            target="_blank"
          >
            Wish
          </a>
          .
          <br />
          <br />
          Programming is my medium for building interesting solutions to
          everyday problems. I'm currently learning more about big data, AI/ML,
          and distributed systems. On the side, I love home cooking, trivia
          nights, and browsing small shops in new cities!
          <br />
          <br />
          <span style={{ fontWeight: "400" }}>
            I'm currently looking for Summer and Fall 2024 opportunities.
          </span>{" "}
          Feel free to reach out for a chat at{" "}
          <a
            href="mailto:udy.ding@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            udy.ding@gmail.com
          </a>
          .
        </div>
      </div>
    </div>
  );
}
