import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './styles/Contacts.css';

export default function Contacts() {
  return (
    <>
      <section id='contacts' className='contacts-section'>
        <h1>Contacts</h1>
        <div className='contacts-content'>
          <ul className='contacts-list'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
            >
              <li className='contacts-list-item'>
                <a
                  className='contacts-list-link'  
                  href='mailto:i.seto00@gmail.com' 
                  rel='noreferrer' 
                  target='_blank'
                >
                  <EmailIcon />
                </a>
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5 }}
            >
              <li className='contacts-list-item'>
                <a 
                  className='contacts-item-link' 
                  href='https://www.linkedin.com/in/ianseto' 
                  rel='noreferrer' 
                  target='_blank'
                >
                  <LinkedInIcon />
                </a>
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2 }}
            >
              <li className='contacts-list-item'>
                <a 
                  className='contacts-item-link' 
                  href='https://www.github.com/setoi1' 
                  rel='noreferrer' 
                  target='_blank'
                >
                  <GitHubIcon className='github-icon'/>
                </a>
              </li>
            </motion.div>
          </ul>
        </div>
      </section>
    </>
  );
}
