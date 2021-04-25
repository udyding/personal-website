import React from "react";
import styles from "./Greeting.module.css";
import picture from "../assets/Picture.png";

export default function Greeting() {
  return (
    <div className={styles.greeting}>
      <div className={styles.greetingContent}>
        <div>
          <h1
            style={{
              fontWeight: "normal",
              color: "#F5E09C",
              fontSize: "24px",
              marginBottom: "20px",
            }}
          >
            Hey there! I'm
          </h1>
          <h1
            style={{
              fontWeight: "500",
              color: "#ffffff",
              fontSize: "90px",
              marginBottom: "20px",
            }}
          >
            Udy Ding.
          </h1>
          <h3
            style={{
              fontWeight: "normal",
              color: "#F5E09C",
              fontSize: "24px",
              marginBottom: "20px",
              maxWidth: "500px",
            }}
          >
            I’m a software developer based in Toronto. Currently, I’m a CS
            student at UWaterloo and an incoming SWE Intern at OpenText.
          </h3>
          <a href="#contact">
            <button className={styles.coolButton}>Contact me!</button>
          </a>
        </div>
      </div>
      <img className={styles.picture} src={picture} alt="spacesuit" />
    </div>
  );
}
