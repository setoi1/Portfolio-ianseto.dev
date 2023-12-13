import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

import './Landing.css';

const contacts = [
  {
    href: 'mailto:i.seto00@gmail.com',
    icon: <FaEnvelope />,
  },
  {
    href: 'https://www.linkedin.com/in/ianseto',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://www.github.com/setoi1',
    icon: <FaGithub />,
  },
]

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
          {contacts.map(contact => 
            <li className='landing-contacts-list-item'>
              <a 
                className='landing-contacts-item-link' 
                href={contact.href} 
                rel='noreferrer' 
                target='_blank'
              >
                {contact.icon}
              </a>
            </li>
          )}
        </ul>
      </div>
      {!isMobile && <img src='Ian_Seto.png' />}
    </section>
  );
}
