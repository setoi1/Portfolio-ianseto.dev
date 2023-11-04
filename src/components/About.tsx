import { Typography } from '@mui/material';
import './styles/About.css';

export default function About() {
  return (
    <>
      <section id='about' className='about-section'>
        <Typography variant='h1'>About Me</Typography>
        <div className='about-content'>
          <p>
            <Typography>Graduated with a Bachelor of Science in Computer Science from Wentworth Institute of Technology, with a passion for developing innovative software that creates a real-world impact in any industry.</Typography> 
          </p>
          <p>
            <Typography>Experience in developing cloud platforms within the Financial Technology industry and always excited to jump into new industries to build different types of products, whether it be fullstack, backend, or frontend development.</Typography> 
          </p>
          <p>
            <Typography>I love gaming, traveling, music, and basketball, and am always pushing myself to learn new technologies through my career and various personal projects around my hobbies as well.</Typography> 
          </p>
        </div>
      </section>
    </>
  );
}
