import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './styles/Navbar.css';

export default function Navbar() {
  const navLinks = [
    {
      "text": "About",
      "section": "#about"
    },
    {
      "text": "Experience",
      "section": "#experience"
    },
    {
      "text": "Projects",
      "section": "#projects"
    },
    {
      "text": "Contacts",
      "section": "#contacts"
    },
  ];

  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="nav-list">
            {navLinks.map((navlink) => (
              <li className="nav-item"><a className="nav-link" href={navlink.section}>{navlink.text}</a></li>
            ))}
            <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/ianseto/" rel="noreferrer" target="_blank"><LinkedInIcon /></a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.github.com/setoi1" rel="noreferrer" target="_blank"><GitHubIcon /></a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};
