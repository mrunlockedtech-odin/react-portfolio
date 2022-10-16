import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
import NavBar from './components/NavBar/NavBar';
import { useRef } from 'react';

import './App.css';
import ProjectDetails from './pages/Projects/ProjectDetails';

function App() {
  const home = useRef(null)
  const about = useRef(null)
  const contact = useRef(null)
  const resume = useRef(null)
  const projects = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }

  return (
    <>
      <NavBar scrollToSection={scrollToSection} homeRef={home} aboutRef={about} contactRef={contact} resumeRef={resume} projectsRef={projects}/>
      <Home homeRef={home}/>
      <About aboutRef={about}/>
      <Contact contactRef={contact}/>
      <Resume resumeRef={resume}/>
      <Projects projectsRef={projects}/>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectDetails' element={<ProjectDetails />} />
      </Routes> */}
    </>

  );
}

export default App;
