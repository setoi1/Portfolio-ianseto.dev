import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import ProjectCard from '../ProjectCard/ProjectCard';
import NewProjectCard from '../NewProjectCard/NewProjectCard';
import { Typography } from '@mui/material';
import './Projects.css';

type TechStack = {
  id: number,
  tech: string
}

interface Projects {
  id: number,
  image: string,
  title: string,
  description: string,
  techStack: Array<TechStack>,
  link: string,
}

export default function Projects() {
  const projects = [
    {
      id: 0,
      duration: .5,
      image: 'SwiftAPI.png',
      title: 'SwiftAPI',
      description: 'A platform for developers to monetize their APIs and for users to purchase APIs in just a few clicks. Provides analytics, monitoring, and loggin features.',
      techStack: [
        {
          id: 0,
          tech: 'React'
        },
        {
          id: 1,
          tech: 'TypeScript'
        },
        {
          id: 2,
          tech: 'Node.js'
        },
        {
          id: 3,
          tech: 'MongoDB'
        }
      ],
      link: 'https://github.com/setoi1/SwiftAPI'
    },
    {
      id: 1,
      duration: .75,
      image: 'FiMan.png',
      title: 'Finance Manager',
      description: 'A finance manager application built with Python.',
      techStack: [
        {
          id: 0,
          tech: 'Python'
        }, 
        {
          id: 1, 
          tech: 'tkinter',
        }, 
        {
          id: 2,
          tech: 'RESTful APIs'
        }
      ],
      link: 'https://github.com/marinom1/FiMan-Financial_Manager'
    },
    {
      id: 2,
      duration: 1,
      image: 'Stock.png',
      title: 'Stock Market Discord Bot',
      description: 'A discord bot to display user-requested stock information such as news, prices, and company information.',
      techStack: [
        {
          id: 0,
          tech: 'JavaScript'
        },
        {
          id: 1,
          tech: 'Node.js'
        },
        {
          id: 2,
          tech: 'RESTful APIs'
        }
      ],
      link: 'https://github.com/setoi1/Stock-Market-Discord-Bot'
    },
    {
      id: 3,
      duration: 1.25,
      image: 'NetTherapy.png',
      title: 'NetTherapy',
      description: 'A website targeted towards users who feel anxious or hesistant to seek help regarding their mental well-being from certified therapists.',
      techStack: [
        {
          id: 0,
          tech: 'JavaScript'
        },
        {
          id: 1,
          tech: 'PHP'
        },
        {
          id: 2,
          tech: 'PostgreSQL'
        }
      ],
      link: 'https://github.com/setoi1/Online-Therapy-Forum'
    },
  ];

  return (
    <section id='projects' className='projects'>
      <div className='projects-wrapper'>
        <Typography variant='h2'>Projects</Typography>
        <div className='projects-content'>
          <Grid className='projects-grid' container columns={12} spacing={8} justifyContent='center'>
            {projects.map((project) => (
              <Grid key={project.title} className='project-item' item>
                <motion.div
                  initial={{ y: 25, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: project.duration }}
                > 
                  <ProjectCard
                    id={project.id}
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
        <a href='https://github.com/setoi1/'>View All Projects</a>
        <NewProjectCard />
      </div>
    </section>
  );
}
