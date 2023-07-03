import { Grid } from '@material-ui/core';

import ProjectCard from './ProjectCard';

import './styles/Projects.css';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      "id": 0,
      "image": "SwiftAPI.png",
      "title": "SwiftAPI",
      "techStack": ['TypeScript', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB'],
      "description": "A platform for developers to monetize their APIs and for users to purchase APIs in just a few clicks, as well as providing a proxy server for request validation between users and developers.",
      "link": "https://github.com/andrewgalvin/SwiftAPI"
    },
    {
      "id": 1,
      "image": "FiMan.png",
      "title": "Finance Manager",
      "techStack": ['Python', 'tkinter', 'RESTful APIs'],
      "description": "A finance manager application built with Python.",
      "link": "https://github.com/marinom1/FiMan-Financial_Manager"
    },
    {
      "id": 2,
      "image": "Stock.png",
      "title": "Stock Market Discord Bot",
      "techStack": [
        'JavaScript', 'Node.js', 'RESTful APIs'
      ],
      "description": "A discord bot to display user-requested stock information such as news, prices, and company information.",
      "link": "https://github.com/setoi1/Stock-Market-Discord-Bot"
    },
    {
      "id": 3,
      "image": "NetTherapy.png",
      "title": "NetTherapy",
      "techStack": ['JavaScript', 'PostgreSQL', 'PHP'],
      "description": "A website targeted towards users who feel anxious or hesistant to seek help regarding their mental well-being from certified therapists.",
      "link": "https://github.com/setoi1/Online-Therapy-Forum"
    },
  ];

  return (
    <>
      <section id="projects" className="projects-section">
        <h1 className="projects-header-text">Projects</h1>
        <motion.div
          initial={{ y: 50 , opacity: 0 }}
          whileInView={{ y: 0 , opacity: 1 }}
          viewport={{ once: true, amount: .25 }}
          transition={{ duration: .5 }}
        >
          <Grid className="projects-container-items" container spacing={10} style={{ margin: 0, width: '100%' }}>
          {projects.map((project) => (
            <Grid key={project.title} item>
              <ProjectCard 
                image={project.image}
                title={project.title} 
                techStack={project.techStack}
                description={project.description}
                link={project.link}
              />
            </Grid>
          ))}
          </Grid>
        </motion.div>
      </section>
    </>
  );
};
