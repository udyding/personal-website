import React from "react";
import styles from "./Media.module.css";

export default function Media(props) {
  const { title, link, text, logo } = props;
  return (
    <div style={{ marginRight: "50px" }}>
      <div className={styles.box}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h3 className={styles.text}>{text}</h3>
        <br></br>
        <a
          className={styles.link}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}
        </a>
      </div>
    </div>
  );
}
