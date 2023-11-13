import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

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
        <div className='wrapper'>
          <div className='left-column'>
            <Landing />
          </div>
          <div className='right-column'>
            <About />
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
