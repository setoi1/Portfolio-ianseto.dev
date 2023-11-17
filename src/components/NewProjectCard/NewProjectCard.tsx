import { motion } from 'framer-motion';
import './NewProjectCard.css';

export default function NewProjectCard() {
  return (
    <motion.div
      className='card-wrapper'
    >
      <a href='https://google.com'>
        <h1>
          Hello
        </h1>
        <p>
          Description
        </p>
      </a>
    </motion.div>
  );
}
