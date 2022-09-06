import React from 'react';
import { Button } from '@material-ui/core';

const About = () => {
  return (
    <div className="about-page">
      <div className="section-header-text">
        <h3>About Me</h3>
      </div>
      <div className="about-description">
        <p className="about-description-paragraph">
          Hi! My name is Ian Seto and I'm a recent graduate from Wentworth Institute of Technology with degree in Computer Science. 
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
        HERE
      </Button>
    </div>
  );
}

export default About;
