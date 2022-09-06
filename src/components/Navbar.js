import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {

  let mobile = false;

  if (window.innerWidth < 480) {
    mobile = true;
  }

  return (
    <AppBar className="navbar" color="primary">
      <Toolbar className="navbar-nav">
        <nav className="navbar-navlinks">
          <Link className="navbar-navlink" to="/">
            Home
          </Link>
          <Link className="navbar-navlink" to="/about">
            About
          </Link>
          <Link className="navbar-navlink" to="/projects">
            Projects
          </Link>
          <Link className="navbar-navlink" to="/contacts">
            Contacts
          </Link>
          <div className="navbar-contacts">
            <a className="contacts-item-link" href="linkedin.com/in/ianseto/" rel="noreferrer" target="_blank">
              <LinkedInIcon className="navbar-contacts-icons" />
            </a>
            <a className="contacts-item-link" href="github.com/setoi1" rel="noreferrer" target="_blank">
              <GitHubIcon className="navbar-contacts-icons" />
            </a>
          </div>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
