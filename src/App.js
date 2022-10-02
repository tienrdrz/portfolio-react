import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer'
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
<main>
    <Nav />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    <Footer />  
</main>
  );
}

export default App;
