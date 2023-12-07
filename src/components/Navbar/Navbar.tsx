import { FaLinkedin, FaGithub } from "react-icons/fa6";
import './Navbar.css';

const navLinks = [
  {
    id: 0,
    text: 'About',
    section: '#about',
  },
  {
    id: 1,
    text: 'Experience',
    section: '#experience',
  },
  {
    id: 2,
    text: 'Work',
    section: '#projects',
  },
];

export default function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <ul className='nav-list'>
          {navLinks.map((navLink) => (
            <li key={navLink.id} className='nav-item'>
              <a className='nav-link' href={navLink.section}>
                {navLink.text}
              </a>
            </li>
          ))}
          <li className='nav-item'>
            <a 
              className='nav-link' 
              href='https://www.linkedin.com/in/ianseto/' 
              rel='noreferrer' 
              target='_blank'
            >
              <FaLinkedin />
            </a>
          </li>
          <li className='nav-item'>
            <a 
              className='nav-link' 
              href='https://www.github.com/setoi1' 
              rel='noreferrer' 
              target='_blank'
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
