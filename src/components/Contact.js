import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactFooterWrapper}>
      <div className={styles.contact}>
        <h1>Or... we could get in touch!</h1>
        {/* <img className={styles.balloon} src={balloon} alt="balloon" /> */}
        <form>
          <div className={styles.input}>
            <input
              type="text"
              id="uniqueName"
              placeholder="Your name,"
              autoComplete="nope"
            />
            <input
              type="email"
              id="uniqueEmail"
              placeholder="email, and"
              autoComplete="nope"
            />
            <textarea id="message" placeholder="a message." />
            <input type="submit" value="Send" />
          </div>
        </form>
        {/* <img
            className={styles.car}
            style={{ marginTop: "82px" }}
            src={truck}
            alt="truck"
          />
          <img
            className={styles.car}
            style={{ marginTop: "63px", marginLeft: "700px" }}
            src={redCar}
            alt="red"
          />
          <img
            className={styles.car}
            style={{ marginTop: "98px", marginLeft: "1300px" }}
            src={pinkCar}
            alt="pink"
          /> */}
      </div>
    </div>
  );
}
