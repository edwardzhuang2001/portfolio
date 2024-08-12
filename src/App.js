import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Nav/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
// import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
          <Hero />
        </header>
        <main>
          <About />
          <Skills />
          <Experience />
          {/* <Projects /> */}
          {/* <Certificates /> */}
        </main>
        <footer>
          <Contact />
          <Copyright />
        </footer>
      </div>
    </Router>
  );
}

export default App;