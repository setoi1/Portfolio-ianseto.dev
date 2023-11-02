import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import './styles/Landing.css';

export default function Landing() {
  return (
    <>
      <div className='slider-thumb'>
        <section id="landing" className="landing-section">
          <div className="landing-content">
            <motion.div
              initial={{ y: 37.5 , opacity: 0 }}
              whileInView={{ y: 0 , opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .5 }}
            >
              <h1 className="landing-header-text">Hi,</h1>
            </motion.div>
            <motion.div
              initial={{ y: 37.5 , opacity: 0 }}
              whileInView={{ y: 0 , opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h1 className="landing-header-text">I'm Ian.</h1>
            </motion.div>
            <motion.div
              initial={{ y: 37.5 , opacity: 0 }}
              whileInView={{ y: 0 , opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              <h2 className="landing-headline">Software Engineer.</h2>
            </motion.div>
            <motion.div
              initial={{ y: 37.5 , opacity: 0 }}
              whileInView={{ y: 0 , opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              <h2 className='landing-introduction'>I'm passionate about developing and designing engaging, intricate, scalable, and robust software.</h2>
            </motion.div>
            <motion.div
              initial={{ y: 37.5 , opacity: 0 }}
              whileInView={{ y: 0 , opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5 }}
            >
              <ul className="landing-contacts-list">
                <li className="landing-contacts-list-item"><a className="landing-contacts-item-link" href="mailto:i.seto00@gmail.com" rel="noreferrer" target="_blank"><EmailIcon /></a></li>
                <li className="landing-contacts-list-item"><a className='landing-contacts-item-link' href="https://www.linkedin.com/in/ianseto" rel="noreferrer" target="_blank"><LinkedInIcon /></a></li>
                <li className="landing-contacts-list-item"><a className="landing-contacts-item-link" href="https://www.github.com/setoi1" rel="noreferrer" target="_blank"><GitHubIcon className="github-icon"/></a></li>
              </ul>
            </motion.div>
          </div>
          <motion.div
              initial={{ y: 37.5 , opacity: 0 }}
              whileInView={{ y: 0 , opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3 }}
            >
              <div className="navigate-down">
                <button><ArrowDropDownCircleIcon /></button>
              </div>
            </motion.div>
        </section>
      </div>
    </>
  );
}
