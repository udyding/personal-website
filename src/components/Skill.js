import React from "react";
import styles from "./Skill.module.css";

export default function Skill(props) {
  const { text, picture } = props;

  return (
    <div style={{ marginLeft: "25px", marginRight: "25px" }}>
      <div className={styles.circle}>
        <img className={styles.picture} src={picture} alt="icon" />
      </div>
      <h3 style={{ fontWeight: 400, fontSize: "20px", color: "#3E4E50" }}>
        {text}
      </h3>
    </div>
  );
}
