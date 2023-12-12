import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Circle from './components/Circle';

import './styling/App.css';

export default function App() {
  let isMobile = true;
  if (window.innerWidth > 600) {
    isMobile = false;
  }

  return (
    <div className='App'>
      {!isMobile && <Navbar />}
      <div className='wrapper'>
        {!isMobile && <Circle />}
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
  );
}
