import React from "react";
import styles from "./Skill.module.css";

export default function Skill(props) {
  const { text } = props;

  return <div className={styles.box}>{text}</div>;
}
