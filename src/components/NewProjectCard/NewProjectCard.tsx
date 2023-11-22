import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import { ProjectData } from '../../types/Types';
import './NewProjectCard.css';

export default function NewProjectCard(props: ProjectData) {
  return (
    <motion.div
      className='card-wrapper'
    >
      <a href={props.link}>
        <Typography variant='h1'>{props.name}</Typography>
        <Typography variant='body1'>{props.description}</Typography>
        <ul className='tech-stack-list'>
          {props.techStack.map(tech => 
            <li key={tech.id}>
              <Typography>{tech.name}</Typography>
            </li>
          )}
        </ul>
      </a>
    </motion.div>
  );
}
