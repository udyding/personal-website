import React from "react";
import styles from "./AboutMe.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Skill from "./Skill";
import portrait from "../assets/Portrait.png";

export default function AboutMe() {
  let skills = [
    { name: "JavaScript" },
    { name: "Python" },
    { name: "React" },
    { name: "APIs" },
  ];
  return (
    <div className={styles.intro}>
      <img className={styles.portrait} src={portrait} alt="myself" />
      <div className={styles.introContent}>
        <div>
          <div className={styles.subtitle}>A little bit about me first...</div>
          <div className={styles.aboutMe}>
            I love software because it allows me to create interesting solutions
            to everyday problems. What I was once only able to do by holding
            small events in my community, I can now translate to interactive web
            tools that anyone can use.
            <br />
            <br />
            The projects that I’m most proud of making are those that immerse me
            in lifelong passions and introduce me to new ideas. In my free time,
            I love experimenting with food, playing Minecraft, and listening to{" "}
            <a
              href="https://www.youtube.com/watch?v=hxxcEzM8r-4"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "#ffffff" }}
            >
              Tiny Desk Concerts.
            </a>
            <br />
            <br />
            Some technologies that I work with often are:
          </div>
          <div className={styles.skillsContainer}>
            {skills.map((skill, i) => {
              return (
                <div>
                  {/* <Col md={3}> */}
                  <Skill text={skills[i].name} />
                  {/* </Col> */}
                </div>
              );
            })}
          </div>
          {/* <div className={styles.skillsContainer}>
            <Row
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {skills.map((skill, i) => {
                return (
                  <div>
                    {/* <Col md={3}> */}
          {/* <Skill text={skills[i].name} />
                    </Col>
                  </div>
                );
              })}
            </Row>
          </div>  */}
        </div>
      </div>
    </div>
  );
}
