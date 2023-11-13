import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Navbar.css';

export default function Navbar() {
  const navLinks = [
    {
      id: 0,
      text: 'About',
      section: '#about'
    },
    {
      id: 1,
      text: 'Experience',
      section: '#experience'
    },
    {
      id: 2,
      text: 'Projects',
      section: '#projects'
    },
  ];

  return (
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
            <LinkedInIcon />
          </a>
        </li>
        <li className='nav-item'>
          <a 
            className='nav-link' 
            href='https://www.github.com/setoi1' 
            rel='noreferrer' 
            target='_blank'
          >
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
