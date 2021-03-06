import React from "react";
import styles from "./Projects.module.css";
import Project from "./Project";
import campusCooks from "../assets/CampusCooks.png";
import inclusify from "../assets/Inclusify.png";
import sousChef from "../assets/SousChef.png";
import ccSS from "../assets/ccSS.png";
import inclusifySS from "../assets/inclusifySS.png";
import scSS from "../assets/scSS.png";

export default function Projects() {
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
    <div className={styles.projects_container}>
      <h1 className={styles.title}>And some stuff I've been working on...</h1>
      <div className={styles.projects}>
        {projects.map((project, i) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}
