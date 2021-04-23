import React from "react";
import styles from "./Footer.module.css";
import staticGround from "../assets/staticGround.svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <img className={styles.staticGround} src={staticGround} alt="ground" />
      <div className={styles.footerContent}>
        <div
          style={{
            fontWeight: 400,
            fontSize: "16px",
            color: "#3E4E50",
          }}
        >
          Designed and developed by Udy Ding © 2021
        </div>
        <div className={styles.links}>
          <a
            href="https://ca.linkedin.com/in/udy-ding"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="http://github.com/udyding"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://devpost.com/udyding"
            rel="noopener noreferrer"
            target="_blank"
          >
            Devpost
          </a>
        </div>
      </div>
    </div>
  );
}
