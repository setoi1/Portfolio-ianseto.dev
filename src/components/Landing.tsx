import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './styles/Landing.css';
import { Typography } from '@mui/material';

export default function Landing() {
  let mobile = false;

  if (window.innerWidth < 600) {
    mobile = true;
  }

  return (
    <>
      {/*<section id='landing' className='landing-section'>*/}
        <div className='landing-content'>
          <div className='landing-main'>
            <div className='slider-thumb'>
              <motion.div
                initial={{ y: 37.5 , opacity: 0 }}
                whileInView={{ y: 0 , opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .66 }}
              >
                <h1 className='landing-header'>Hi,</h1>
              </motion.div>
              <motion.div
                initial={{ y: 37.5 , opacity: 0 }}
                whileInView={{ y: 0 , opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .99 }}
              >
                <h1 className='landing-header'>I'm Ian.</h1>
              </motion.div>
              <motion.div
                initial={{ y: 37.5 , opacity: 0 }}
                whileInView={{ y: 0 , opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.32 }}
              >
                <h2 className='landing-headline'>Software Engineer.</h2>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ y: 37.5 , opacity: 0 }}
            whileInView={{ y: 0 , opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.65 }}
          >
            <p className='landing-introduction'>
              <Typography>I'm passionate about developing and designing engaging, intricate, scalable, and robust software.</Typography>
            </p>
          </motion.div>
          {!mobile && 
            <motion.div
              initial={{ y: 37.5 , opacity: 0 }}
              whileInView={{ y: 0 , opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.98 }}
            >
              <ul className='landing-contacts-list'>
                <li className='landing-contacts-list-item'><a className='landing-contacts-item-link' href='mailto:i.seto00@gmail.com' rel='noreferrer' target='_blank'><EmailIcon /></a></li>
                <li className='landing-contacts-list-item'><a className='landing-contacts-item-link' href='https://www.linkedin.com/in/ianseto' rel='noreferrer' target='_blank'><LinkedInIcon /></a></li>
                <li className='landing-contacts-list-item'><a className='landing-contacts-item-link' href='https://www.github.com/setoi1' rel='noreferrer' target='_blank'><GitHubIcon className='github-icon'/></a></li>
              </ul>
            </motion.div>
          }
          <motion.div
            initial={{ y: 37.5 , opacity: 0 }}
            whileInView={{ y: 0 , opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.31 }}
          >
            <div className='landing-transition'>
              <Typography>Scroll down to see some of my work</Typography>
              <ArrowDownwardIcon></ArrowDownwardIcon>
            </div>
          </motion.div>
        </div>
      {/*</section>*/}
    </>
  );
}
