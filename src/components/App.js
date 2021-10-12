import React from "react";
import styles from "./App.module.css";
// import Greeting from "./Greeting";
// import AboutMe from "./AboutMe";
// import Projects from "./Projects";
// import Resume from "./Resume";
// import Contact from "./Contact";
// import Footer from "./Footer";
import Simple from "./Simple";

function App() {
  return (
    <div className={styles.container}>
      <Simple />
      {/* <Greeting />
      <AboutMe />
      <Projects />
      <Resume />
      <a id="contact" />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
