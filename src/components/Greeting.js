import React from "react";
import styles from "./Greeting.module.css";
import picture from "../assets/Picture.png";

export default function Greeting() {
  return (
    <div className={styles.greeting}>
      <div style={{ marginBottom: "25px" }}>
        <h1 className={styles.description}>Hey there! I'm</h1>
        <h1 className={styles.title}>Udy Ding.</h1>
        <h1 className={styles.description} style={{ maxWidth: "500px" }}>
          I’m a software developer based in Toronto. Currently, I’m a CS student
          at UWaterloo and an incoming SWE Intern at OpenText.
        </h1>
        <a href="#contact">
          <button className={styles.coolButton}>Contact me!</button>
        </a>
      </div>
      <div>
        <img className={styles.picture} src={picture} alt="spacesuit" />
      </div>
    </div>
  );
}
