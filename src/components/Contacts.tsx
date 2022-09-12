import './styling/Contacts.css';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contacts = () => {
  return (
    <main className="contacts-page">
      <div className="page-container">
        <h3 className="page-header-text">Connect with me</h3>
        <ul className="contacts-list">
          <li className="contacts-list-item">
            <a className="contacts-item-link" href="mailto:i.seto00@gmail.com" rel="noreferrer" target="_blank">
              <EmailIcon />
            </a>
            <h3 className='contacts-item-link'>i.seto00@gmail.com</h3>
          </li>
          <li className="contacts-list-item">
            <a className="contacts-item-link" href="https://www.linkedin.com/in/ianseto" rel="noreferrer" target="_blank">
              <LinkedInIcon />
            </a>
            <a className='contacts-item-link' href="https://www.linkedin.com/in/ianseto" rel="noreferrer" target="_blank">
              <h3>linkedin.com/in/ianseto</h3>
            </a>
          </li>
          <li className="contacts-list-item">
            <a className="contacts-item-link" href="https://www.github.com/setoi1" rel="noreferrer" target="_blank">
              <GitHubIcon className="github-icon"/>
            </a>
            <a className='contacts-item-link' href="https://www.github.com/setoi1" rel="noreferrer" target="_blank">
              <h3>github.com/setoi1</h3>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contacts;
