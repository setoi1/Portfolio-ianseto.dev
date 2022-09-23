import './styling/Navbar.css';

import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
    const navLinks = [
      {
        "text": "Home",
        "link": "/"
      },
      {
        "text": "About",
        "link": "/about"
      },
      {
        "text": "Projects",
        "link": "/projects"
      },
      {
        "text": "Contacts",
        "link": "/contacts"
      },
    ];

  return (
    <AppBar className="navbar" style={{ backgroundColor: "black" }}>
      <Toolbar className="navbar-nav">
        <nav className="navbar-navlinks">
          {navLinks.map((navlink) => (
              <Link className="navbar-navlink" to={navlink.link}>
                {navlink.text}
              </Link>
          ))}
          <div className="navbar-contacts">
            <a className="contacts-item-link" href="https://www.linkedin.com/in/ianseto/" rel="noreferrer" target="_blank">
              <LinkedInIcon className="navbar-contacts-icons" />
            </a>
            <a className="contacts-item-link" href="https://www.github.com/setoi1" rel="noreferrer" target="_blank">
              <GitHubIcon className="navbar-contacts-icons" />
            </a>
          </div>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
