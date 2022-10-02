import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer'

function App() {
  return (
<main>
    <Nav />
    <Home />
    <Projects />
    <About />
    <Contact />
    <Footer /> 
</main>
  );
}

export default App;
