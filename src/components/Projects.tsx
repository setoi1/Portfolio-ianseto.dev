import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import './styles/Projects.css';
import ArrowForward from '@mui/icons-material/ArrowForward';

export default function Projects() {
  const projects = [
    {
      'id': 0,
      'duration': .5,
      'image': 'SwiftAPI.png',
      'title': 'SwiftAPI',
      'techStack': ['TypeScript', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB'],
      'description': 'A platform for developers to monetize their APIs and for users to purchase APIs in just a few clicks. Provides analytics, monitoring, and loggin features.',
      'link': 'https://github.com/setoi1/SwiftAPI'
    },
    {
      'id': 1,
      'duration': .75,
      'image': 'FiMan.png',
      'title': 'Finance Manager',
      'techStack': ['Python', 'tkinter', 'RESTful APIs'],
      'description': 'A finance manager application built with Python.',
      'link': 'https://github.com/marinom1/FiMan-Financial_Manager'
    },
    {
      'id': 2,
      'duration': 1,
      'image': 'Stock.png',
      'title': 'Stock Market Discord Bot',
      'techStack': [
        'JavaScript', 'Node.js', 'RESTful APIs'
      ],
      'description': 'A discord bot to display user-requested stock information such as news, prices, and company information.',
      'link': 'https://github.com/setoi1/Stock-Market-Discord-Bot'
    },
    {
      'id': 3,
      'duration': 1.25,
      'image': 'NetTherapy.png',
      'title': 'NetTherapy',
      'techStack': ['JavaScript', 'PostgreSQL', 'PHP'],
      'description': 'A website targeted towards users who feel anxious or hesistant to seek help regarding their mental well-being from certified therapists.',
      'link': 'https://github.com/setoi1/Online-Therapy-Forum'
    },
  ];

  return (
    <>
      <section id='projects' className='projects-section'>
        <h1>Projects</h1>
        <div className='projects-content'>
          <Grid className='projects-grid' container columns={3} spacing={8} justifyContent='center'>
            {projects.map((project) => (
              <Grid className='project-item' key={project.title} item>
                <motion.div
                  initial={{ y: 400, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: .25 }}
                  transition={{ duration: project.duration }}
                > 
                  <ProjectCard 
                    image={project.image}
                    title={project.title} 
                    techStack={project.techStack}
                    description={project.description}
                    link={project.link}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </div>
        <a href='https://github.com/setoi1/'>View All Projects<ArrowForward /></a>
      </section>
    </>
  );
}
