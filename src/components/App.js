import React from "react";
import styles from "./App.module.css";
import picture from "../assets/Picture.png";
import photo from "../assets/Photo.png";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.greeting}>
        <h1
          style={{
            fontWeight: "500",
            color: "#3E4E50",
            fontSize: "80px",
            marginBottom: "20px",
          }}
        >
          Hey! I'm Udy Ding.
        </h1>
        <h3 style={{ fontWeight: "400", color: "#9B6A6C", fontSize: "32px" }}>
          I'm a Toronto-based software developer.
        </h3>
      </div>
      <img className={styles.picture} src={picture} alt="myself" />
      <div className={styles.intro}>
        <img className={styles.photo} src={photo} alt="myself in ithaca" />
        <div className={styles.subtitle}>A little bit about me...</div>
        <div
          className={styles.aboutMe}
          style={{
            fontWeight: "400",
            color: "#3E4E50",
            fontSize: "20px",
          }}
        >
          I love software because it allows me to create interesting solutions
          to everyday problems. What I was once only able to do by holding small
          events in my community, I can now translate to interactive web tools
          that anyone can use.
          <br />
          <br />
          Currently, I’m a Computer Science Student at UWaterloo and an incoming
          Full Stack Dev at OpenText! In my free time, I love experimenting with
          food, playing Minecraft, and listening to{" "}
          <a
            href="https://www.youtube.com/watch?v=hxxcEzM8r-4"
            rel="noopener noreferrer"
            target="_blank"
            style={{ color: "#3E4E50" }}
          >
            Tiny Desk Concerts
          </a>
          .
        </div>
      </div>
      <div className={styles.skills}></div>
    </div>
  );
}

export default App;
