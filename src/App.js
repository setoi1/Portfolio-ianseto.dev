import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="about" element={<About />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="contacts" element={<Contacts />}/>
      </Routes>
    </div>
  );
}

export default App;
