import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Contacts from './components/Contacts';

import './styling/App.css';

export default function App() {
  let mobile = false;
  if (window.innerWidth < 600) {
    mobile = true;
  }

  return (
    <>
      <div className='App'>
        {!mobile &&
          <Navbar />
        }
        <Landing />
        <Experience />
        <Projects />
        <About />
        {/*<Contacts />*/}
      </div>
    </>
  );
}
