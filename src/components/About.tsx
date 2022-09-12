import './styling/About.css';
import { Button } from '@material-ui/core';

const About = () => {
  return (
    <main className="about-page">
      <div className="page-container">
        <h3 className="page-header-text">About Me</h3>
        <div className="about-description">
          <p className="about-description-paragraph">
            Hi! My name is Ian Seto and I'm a recent graduate from Wentworth Institute of Technology with a degree in Computer Science. 
          </p>
          <p className="about-description-paragraph">
            I have a passion for learning new technologies and building well-designed applications using various languages and frameworks such as 
            JavaScript / TypeScript, React, Python, and Java.
          </p>
          <p className="about-description-paragraph">
            A few of my hobbies include gaming, traveling, and listening to music.
          </p>
        </div>
        <h1>Click here to check out some of my projects.</h1>
        <Button variant="contained" href="/projects">
          Here
        </Button>
      </div>
    </main>
  );
}

export default About;
