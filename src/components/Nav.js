import React from 'react';

const Nav = () => {
    return(
        <header>
  <h2>
    <a href="/">
    Portfolio
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#home">
          Home
        </a>
      </li>
      <li className="mx-2">
        <a href="#projects">
          My Projects
        </a>
      </li>
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li className="mx-2">
        <a href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
        </header>
    )
}

export default Nav;