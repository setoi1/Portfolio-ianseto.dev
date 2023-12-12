import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

import './Landing.css';

export default function Landing() {
  let isMobile = false;

  if (window.innerWidth < 600) {
    isMobile = true;
  }
  return (
    <section className='landing'>
      {isMobile && <img src='Ian_Seto.png' width='100%' height='100%' />}
      <div className='landing-wrapper'>
        <h1 className='landing-header'>Hi, I'm Ian.</h1>
        <h2 className='landing-headline'>Software Engineer.</h2>
        <p className='landing-introduction'>I'm passionate about designing and developing engaging, elegant, scalable, and robust software.</p>
        <ul className='landing-contacts-list'>
          <li className='landing-contacts-list-item'>
            <a 
              className='landing-contacts-item-link' 
              href='mailto:i.seto00@gmail.com' 
              rel='noreferrer' 
              target='_blank'
            >
              <FaEnvelope />
            </a>
          </li>
          <li className='landing-contacts-list-item'>
            <a 
              className='landing-contacts-item-link' 
              href='https://www.linkedin.com/in/ianseto' 
              rel='noreferrer' 
              target='_blank'
            >
              <FaLinkedin />
            </a>
          </li>
          <li className='landing-contacts-list-item'>
            <a 
              className='landing-contacts-item-link' 
              href='https://www.github.com/setoi1' 
              rel='noreferrer' 
              target='_blank'
            >
              <FaGithub className='github-icon'/>
            </a>
          </li>
        </ul>
      </div>
      {!isMobile && <img src='Ian_Seto.png' />}
    </section>
  );
}
