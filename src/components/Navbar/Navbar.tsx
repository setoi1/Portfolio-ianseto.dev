import { FaLinkedin, FaGithub } from "react-icons/fa6";
import './Navbar.css';

const navLinks = [
  {
    id: 0,
    className: 'nav-link',
    text: 'About',
    section: '#about',
  },
  {
    id: 1,
    className: 'nav-link',
    text: 'Experience',
    section: '#experience',
  },
  {
    id: 2,
    className: 'nav-link',
    text: 'Work',
    section: '#projects',
  },
  /*
  {
    id: 3,
    className: 'nav-icon',
    text: <FaLinkedin />,
    section:'https://www.linkedin.com/in/ianseto/',
  },
  {
    id: 4,
    className: 'nav-icon',
    text: <FaGithub />,
    section:'https://www.github.com/setoi1',
  },
  */
];

export default function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <ul className='nav-list'>
          {navLinks.map((navLink) => (
            <a key={navLink.id} className={navLink.className} href={navLink.section} >
              <li key={navLink.id} className='nav-item'>
                {navLink.text}
              </li>
            </a>
          ))}
          
        </ul>
      </nav>
    </header>
  );
}
