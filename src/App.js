import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer'

function App() {
  let page
  switch (window.location.pathname) {
    case "/portfolio-react/home":
      page = <Home />
      break
    case "/portfolio-react/projects":
      page = <Projects />
      break
      case "/projects":
        page = <Projects />
        break
      case "/portfolio-react/about":
        page = <About />
        break
        case "/portfolio-react/contact":
      page = <Contact/>
      break
  }
  return (
<main>
    <Nav />
    {page}
    {/* <Home />
    <Projects />
    <About />
    <Contact />*/}
    <Footer />  
</main>
  );
}

export default App;
