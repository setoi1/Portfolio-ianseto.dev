import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

import './App.css';

function App() {
  let mobile = false;

  if (window.innerWidth < 480) {
    mobile = true;
  }

  return (
    <div className="App">
      {!mobile &&
        <>
          <Navbar />
        </>
      }
      <Landing />
      <Experience />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
