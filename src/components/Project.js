import React from "react";
import styles from "./Project.module.css";

export default function Project(props) {
  const { name, description, tools, icon, link, pic } = props;
  const variant = name === "Inclusify" ? "right" : "left";
  return (
    <div
      className={`${styles.container} ${
        variant === "left" ? styles.left : styles.right
      }`}
    >
      {variant === "left" && <img src={pic} />}
      <div className={styles.content}>
        <div>
          <h1>{name}</h1>
          <img src={icon} />
        </div>
        <h2>{description}</h2>
        <h3>
          {tools.map((tool) => (
            <span style={{ marginRight: 16 }}>{tool}</span>
          ))}
        </h3>
      </div>
      {variant === "right" && <img src={pic} />}
    </div>
  );
}
