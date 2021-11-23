import React from "react";
import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <div className={styles.resume}>
      <h1>Want to know more about me?</h1>
      <a
        href="Udy Ding Resume Summer 2022.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Take a copy of my resume!</button>
      </a>
    </div>
  );
}
