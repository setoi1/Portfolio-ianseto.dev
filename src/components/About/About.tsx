import { Typography } from '@mui/material';
import './About.css';

export default function About() {
  return (
    <section id='about' className='about'>
      <div className='about-wrapper'>
        <Typography variant='h2'>About Me</Typography>
        <div className='about-summary'>
          <Typography variant='body2'>Graduated with a Bachelor of Science in Computer Science from Wentworth Institute of Technology, with a passion for developing innovative software that creates a real-world impact in any industry.</Typography> 
          <br></br>
          <Typography variant='body2'>Experienced in developing cloud platforms within the Financial Technology industry and always excited to jump into new industries to build different types of products, whether it be fullstack, backend, or frontend development.</Typography>
          <br></br> 
          <Typography variant='body2'>In my free time, I love gaming, traveling, exploring new music, watching basketball, and am always pushing myself to learn new technologies through my career and various personal projects around my hobbies as well.</Typography>
        </div>
      </div>
    </section>
  );
}
