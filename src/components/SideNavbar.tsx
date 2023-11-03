import { useState } from 'react';
import './styles/SideNavbar.css';

export default function SideNavbar() {
  return (
    <>
      <nav className='side-navbar'>
        <ul className='side-nav-list'>
          <li className='side-nav-item'>
            <a id='#about' className='side-nav-link' href='' onClick={e => () => handleScroll}>
              About
            </a>
          </li>
          <li>
            <a id='#experience' className='side-nav-link' href='#experience' onClick={handleScroll}>
              Experience
            </a>
          </li>
          <li>
            <a id='#projects' className='side-nav-link' href='#projects' onClick={handleScroll}>
              Projects
            </a>
          </li>
          <li>
            <a id='#contacts' className='side-nav-link' href='#contacts' onClick={handleScroll}>
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
