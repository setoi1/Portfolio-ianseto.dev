
import { motion } from 'framer-motion';
import { ProjectData } from '../../types/Types';
import './NewProjectCard.css';

export default function NewProjectCard(props: ProjectData) {
  return (
    <motion.div
      className='card-wrapper'
    >
      <a href={props.link}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <ul className='tech-stack-list'>
          {props.techStack.map(tech => 
            <li key={tech.id}>
              {tech.name}
            </li>
          )}
        </ul>
      </a>
    </motion.div>
  );
}
