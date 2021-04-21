import React from "react";
import styles from "./Project.module.css";
import githubIcon from "../assets/githubIcon.png";
import linkIcon from "../assets/linkIcon.png";

export default function Project(props) {
  const { name, description, tools, icon, link, github, pic, index } = props;
  return (
    <div className={styles.container}>
      <img src={pic} />
      <div className={styles.content}>
        <div>
          <h1>{name}</h1>
          <img style={{ height: "65px", width: "65px" }} src={icon} />
        </div>
        <h2>{description}</h2>
        <ul>
          {tools.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </div>
      <div className={styles.links} style={{ position: "absolute" }}>
        <a href={link} rel="noopener noreferrer" target="_blank">
          <img src={linkIcon} alt="link" />
        </a>
        <a href={github} rel="noopener noreferrer" target="_blank">
          <img src={githubIcon} alt="github" />
        </a>
      </div>
    </div>
  );
}
