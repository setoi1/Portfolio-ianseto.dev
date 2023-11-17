  import { motion } from 'framer-motion';
  import { Typography, Grid } from '@mui/material';
  import ProjectCard from '../ProjectCard/ProjectCard';
  import NewProjectCard from '../NewProjectCard/NewProjectCard';
  import './Projects.css';

  export default function Projects() {
    const projects = [
      {
        id: 0,
        image: 'SwiftAPI.png',
        name: 'SwiftAPI',
        description: 'A platform for developers to monetize their APIs and for users to purchase APIs in just a few clicks. Provides analytics, monitoring, and loggin features.',
        techStack: [
          {
            id: 0,
            name: 'React'
          },
          {
            id: 1,
            name: 'TypeScript'
          },
          {
            id: 2,
            name: 'Node.js'
          },
          {
            id: 3,
            name: 'MongoDB'
          }
        ],
        link: 'https://github.com/setoi1/SwiftAPI'
      },
      {
        id: 1,
        image: 'FiMan.png',
        name: 'Finance Manager',
        description: 'A finance manager application built with Python.',
        techStack: [
          {
            id: 0,
            name: 'Python'
          }, 
          {
            id: 1, 
            name: 'tkinter',
          }, 
          {
            id: 2,
            name: 'RESTful APIs'
          }
        ],
        link: 'https://github.com/marinom1/FiMan-Financial_Manager'
      },
      {
        id: 2,
        image: 'Stock.png',
        name: 'Stock Market Discord Bot',
        description: 'A discord bot to display user-requested stock information such as news, prices, and company information.',
        techStack: [
          {
            id: 0,
            name: 'JavaScript'
          },
          {
            id: 1,
            name: 'Node.js'
          },
          {
            id: 2,
            name: 'RESTful APIs'
          }
        ],
        link: 'https://github.com/setoi1/Stock-Market-Discord-Bot'
      },
    ];

    return (
      <section id='projects' className='projects'>
        <div className='projects-wrapper'>
          <Typography variant='h2'>Projects</Typography>
          <div className='projects-content'>
            <ul className='projects-list'>
              {projects.map(project => 
                <li key={project.id} className='project-item'>
                  <a href={project.link}>
                    {project.name}
                  </a>
                </li>
              )}
            </ul>
            {/*}
            <Grid className='projects-grid' container columns={12} spacing={8} justifyContent='center'>
              {projects.map(project => (
                <Grid key={project.name} className='project-item' item>
                  <motion.div
                    initial={{ y: 25, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 1 }}
                  > 
                    <ProjectCard
                      id={project.id}
                      image={project.image}
                      name={project.name} 
                      techStack={project.techStack}
                      description={project.description}
                      link={project.link}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
            */}
          </div>
          <a href='https://github.com/setoi1/'>View All Projects</a>
        </div>
      </section>
    );
  }
