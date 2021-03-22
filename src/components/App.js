import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./App.module.css";
import picture from "../assets/Picture.png";
import photo from "../assets/Photo.png";
import Skill from "./Skill";
import javascriptIcon from "../assets/Javascript.png";
import pythonIcon from "../assets/Python.png";
import reactIcon from "../assets/React.png";
import apiIcon from "../assets/Api.png";
import campusCooks from "../assets/CampusCooks.png";
import inclusify from "../assets/Inclusify.png";
import sousChef from "../assets/SousChef.png";
import ccSS from "../assets/ccSS.png";
import inclusifySS from "../assets/inclusifySS.png";
import scSS from "../assets/scSS.png";
import Project from "./Project";

function App() {
  let skills = [
    { name: "Javascript", icon: javascriptIcon },
    { name: "Python", icon: pythonIcon },
    { name: "React", icon: reactIcon },
    { name: "APIs", icon: apiIcon },
  ];
  let projects = [
    {
      name: "Campus Cooks",
      description:
        "A platform for UWaterloo students to share and try new foods.",
      tools: ["Express", "NodeJS", "MongoDB", "React", "Firebase"],
      icon: campusCooks,
      link: "https://campus-cooks.netlify.app/",
      pic: ccSS,
    },
    {
      name: "Inclusify",
      description:
        "A writing buddy that helps make your documents more inclusive, unbiased, and professional.",
      tools: ["NodeJS", "React", "Figma", "MaterialUI"],
      icon: inclusify,
      link: "https://inclusifyapp.herokuapp.com/",
      pic: inclusifySS,
    },
    {
      name: "Sous Chef",
      description:
        "Use voice commands to walk through recipes step-by-step and simplify cooking.",
      tools: ["Express", "NodeJS", "Spoonacular API", "Bootstrap"],
      icon: sousChef,
      link: "https://sous-chef-website.herokuapp.com/",
      pic: scSS,
    },
  ];

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
      <div className={styles.skills}>
        <h1
          style={{
            fontWeight: "500",
            color: "#3E4E50",
            fontSize: "36px",
            marginBottom: "40px",
          }}
        >
          Some of my skills...
        </h1>
        <Container>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {skills.map((skill, i) => {
              return (
                <div>
                  <Col md={3}>
                    <Skill text={skills[i].name} picture={skills[i].icon} />
                  </Col>
                </div>
              );
            })}
          </Row>
        </Container>
      </div>
      <div>
        <h1
          style={{
            fontWeight: "500",
            color: "#3E4E50",
            fontSize: "36px",
            marginBottom: "70px",
            textAlign: "center",
          }}
        >
          And here's some stuff I've been working on...
        </h1>
        <Container>
          {projects.map((project, i) => {
            return (
              <div>
                <Project
                  name={projects[i].name}
                  description={projects[i].description}
                  tools={projects[i].tools}
                  icon={projects[i].icon}
                  link={projects[i].link}
                  pic={projects[i].pic}
                />
              </div>
            );
          })}
        </Container>
      </div>
      <div className={styles.resume}>
        <h1>Want to know more about me?</h1>
        <a href="Udy Ding Resume 2021 copy.pdf" target="_blank">
          <button>Take a copy of my resume!</button>
        </a>
      </div>
    </div>
  );
}

export default App;
