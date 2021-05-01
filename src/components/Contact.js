import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./Contact.module.css";
import Media from "./Media.js";
import gmailIcon from "../assets/Gmail.png";
import linkedInIcon from "../assets/LinkedIn.png";
import githubIcon from "../assets/Github.png";
import devpostIcon from "../assets/Devpost.png";

export default function Contact() {
  let contacts = [
    {
      title: "udy.ding@gmail.com",
      link: "mailto:udy.ding@gmail.com",
      text: "Let's chat.",
      logo: gmailIcon,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/udy-ding/",
      text: "Get connected.",
      logo: linkedInIcon,
    },
    {
      title: "Github",
      link: "http://github.com/udyding",
      text: "Check out my work or my...",
      logo: githubIcon,
    },

    {
      title: "Devpost",
      link: "https://devpost.com/udyding",
      text: "...fast-paced team projects.",
      logo: devpostIcon,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Or... we could get in touch!</h1>
          <h3 className={styles.description}>
            Currently, I'm looking for Winter 2022 opportunities! Please feel
            free to reach out - I'd love to chat!
          </h3>
        </div>
        <div className={styles.mediaWrapper}>
          {contacts.map((contact, i) => {
            return (
              <Media
                title={contacts[i].title}
                link={contacts[i].link}
                text={contacts[i].text}
                logo={contacts[i].logo}
              />
            );
          })}
        </div>
      </div>

      {/* <form>
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
        </form> */}
    </div>
  );
}
