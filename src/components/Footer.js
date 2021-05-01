import React from "react";
import styles from "./Footer.module.css";
import staticGround from "../assets/staticGround.svg";
import rocket from "../assets/Rocket.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <img className={styles.staticGround} src={staticGround} alt="ground" />
      <div className={styles.toTop}>
        <a href="#">
          <img className={styles.rocket} src={rocket} alt="rocket" />
        </a>
        <h3>Back to Top</h3>
      </div>

      <div className={styles.signature}>Designed and developed by Udy Ding</div>
    </div>
  );
}
