import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

import './Landing.css';

export default function Landing() {
  let mobile = false;

  if (window.innerWidth < 600) {
    mobile = true;
  }
  return (
    <section className='landing'>
      {mobile && <img src='Ian_Seto.png' width='100%' height='100%' />}
      <div className='landing-wrapper'>
        <h1 className='landing-header'>Hi, I'm Ian.</h1>
        <h2 className='landing-headline'>Software Engineer.</h2>
        <p className='landing-introduction'>I'm passionate about developing and designing engaging, intricate, scalable, and robust software.</p>
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
      {!mobile && <img src='Ian_Seto.png' />}
    </section>
  );
}
