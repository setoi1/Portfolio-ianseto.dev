import './styling/Projects.css';
import ProjectCard from './ProjectCard';
import { Grid } from '@material-ui/core';

const Projects = () => {
  const projects = [
    {
      "title": "SwiftAPI",
      "techStack": "React, Node.js, Express.js, MongoDB",
      "description": "A platform for developers to monetize their APIs and for users to purchase APIs in just a few clicks, as well as providing a proxy server for request validation between users and developers.",
      "link": "https://github.com/andrewgalvin/SwiftAPI"
    },
    {
      "title": "Finance Manager",
      "techStack":"Python, tkinter",
      "description": "A finance manager application built with Python.",
      "link": "https://github.com/marinom1/FiMan-Financial_Manager"
    },
    {
      "title": "Stock Market Discord Bot",
      "techStack": "JavaScript, Node.js",
      "description": "A discord bot to display user-requested stock information such as news, prices, and company information.",
      "link": "https://github.com/setoi1/Stock-Market-Discord-Bot"
    },
    {
      "title": "Online Web Therapy",
      "techStack": "HTML / CSS, PHP, JavaScript",
      "description": "A website targeted towards users who feel anxious or hesistant to seek help regarding their mental well-being from certified therapists.",
      "link": "https://github.com/setoi1/Online-Therapy-Forum"
    },
  ]

  return (
    <main className="projects-page">
      <div className="page-container">
        <h3 className="page-header-text">Projects</h3>
        <Grid className="projects-container-items" container spacing={10} style={{margin: 0,width: '100%',}}>
        {projects.map((project) => (
          <Grid item>
            <ProjectCard 
              title={project.title} 
              techStack={project.techStack}
              description={project.description}
              link={project.link}
            />
          </Grid>
        ))}
        </Grid>
      </div>
    </main>
  );
};

export default Projects;
