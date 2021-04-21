import React from "react";
import styles from "./Skill.module.css";

export default function Skill(props) {
  const { text } = props;

  return (
    <div style={{ margin: "20px 15px 0px 0px" }}>
      <div className={styles.box}>
        <h3 className={styles.technology}>{text}</h3>
      </div>
    </div>
  );
}
