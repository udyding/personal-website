import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./App.module.css";
import picture from "../assets/Picture.png";
import portrait from "../assets/Portrait.png";
import Skill from "./Skill";
// import javascriptIcon from "../assets/Javascript.png";
// import pythonIcon from "../assets/Python.png";
// import reactIcon from "../assets/React.png";
// import apiIcon from "../assets/Api.png";
import campusCooks from "../assets/CampusCooks.png";
import inclusify from "../assets/Inclusify.png";
import sousChef from "../assets/SousChef.png";
import ccSS from "../assets/ccSS.png";
import inclusifySS from "../assets/inclusifySS.png";
import scSS from "../assets/scSS.png";
import Project from "./Project";
import staticGround from "../assets/staticGround.png";
// import balloon from "../assets/Balloon.png";
// import truck from "../assets/truck.png";
// import redCar from "../assets/redCar.png";
// import pinkCar from "../assets/pinkCar.png";

function App() {
  let skills = [
    { name: "Javascript ES6" },
    { name: "Python" },
    { name: "React" },
    { name: "APIs" },
  ];
  let projects = [
    {
      name: "Campus Cooks",
      description:
        "A platform for UWaterloo students to share and try new foods.",
      tools: ["Express", "NodeJS", "MongoDB", "React", "Firebase"],
      icon: campusCooks,
      link: "https://campus-cooks.netlify.app/",
      github: "https://github.com/udyding/campus-cooks",
      pic: ccSS,
    },
    {
      name: "Inclusify",
      description:
        "A writing buddy that helps make your documents more inclusive, unbiased, and professional.",
      tools: ["NodeJS", "React", "Figma", "MaterialUI"],
      icon: inclusify,
      link: "https://inclusifyapp.herokuapp.com/",
      github: "https://github.com/udyding/inclusify",
      pic: inclusifySS,
    },
    {
      name: "Sous Chef",
      description:
        "Use voice commands to walk through recipes step-by-step and simplify cooking.",
      tools: ["Express", "NodeJS", "Spoonacular API", "Bootstrap"],
      icon: sousChef,
      link: "https://sous-chef-website.herokuapp.com/",
      github: "https://github.com/udyding/sous-chef",
      pic: scSS,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.greeting}>
        <div className={styles.greetingContent}>
          <div>
            <h1
              style={{
                fontWeight: "normal",
                color: "#F5E09C",
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              Hey there! I'm
            </h1>
            <h1
              style={{
                fontWeight: "500",
                color: "#ffffff",
                fontSize: "100px",
                marginBottom: "20px",
              }}
            >
              Udy Ding.
            </h1>
            <h3
              style={{
                fontWeight: "normal",
                color: "#F5E09C",
                fontSize: "24px",
                marginBottom: "20px",
                maxWidth: "500px",
              }}
            >
              I’m a software developer based in Toronto. Currently, I’m a CS
              student at UWaterloo and an incoming SWE Intern at OpenText.
            </h3>
            <button className={styles.coolButton}>Contact me!</button>
          </div>
        </div>
        <img className={styles.picture} src={picture} alt="spacesuit" />
      </div>
      <div className={styles.intro}>
        <img className={styles.portrait} src={portrait} alt="myself" />
        <div className={styles.introContent}>
          <div>
            <div className={styles.subtitle}>
              A little bit about me first...
            </div>
            <div className={styles.aboutMe}>
              I love software because it allows me to create interesting
              solutions to everyday problems. What I was once only able to do by
              holding small events in my community, I can now translate to
              interactive web tools that anyone can use.
              <br />
              <br />
              The projects that I’m most proud of making are those that immerse
              me in lifelong passions and introduce me to new ideas. In my free
              time, I love experimenting with food, playing Minecraft, and
              listening to{" "}
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
              <Container>
                <Row
                  style={{
                    display: "flex",
                  }}
                >
                  {skills.map((skill, i) => {
                    return (
                      <div>
                        <Col md={3}>
                          <Skill text={skills[i].name} />
                        </Col>
                      </div>
                    );
                  })}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projects}>
        <h1
          style={{
            fontWeight: "500",
            color: "#ffffff",
            fontSize: "36px",
            marginBottom: "100px",
            textAlign: "center",
            marginTop: "400px",
          }}
        >
          And some stuff I've been working on...
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
                  github={projects[i].github}
                  pic={projects[i].pic}
                  index={i}
                />
              </div>
            );
          })}
        </Container>
      </div>
      <div className={styles.resume}>
        <h1>Want to know more about me?</h1>
        <a
          href="Udy Ding Resume 2021 copy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Take a copy of my resume!</button>
        </a>
      </div>
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
      <div className={styles.footer}>
        <img className={styles.staticGround} src={staticGround} alt="ground" />
        <div className={styles.footerContent}>
          <div
            style={{
              fontWeight: 400,
              fontSize: "16px",
              color: "#3E4E50",
            }}
          >
            Designed and developed by Udy Ding © 2021
          </div>
          <div className={styles.links}>
            <a
              href="https://ca.linkedin.com/in/udy-ding"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="http://github.com/udyding"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://devpost.com/udyding"
              rel="noopener noreferrer"
              target="_blank"
            >
              Devpost
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
