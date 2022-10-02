import React from 'react';

const Nav = () => {
    return(
        <header>
  <h2>
    <a href="/">
    Portfolio
    </a>
  </h2>
  <nav className='navbar'>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="/portfolio-react/home">
          Home
        </a>
      </li>
      <li className="mx-2">
        <a href="/portfolio-react/projects">
          My Projects
        </a>
      </li>
      <li className="mx-2">
        <a href="/portfolio-react/about">
          About me
        </a>
      </li>
      <li className="mx-2">
        <a href="/portfolio-react/contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
        </header>
    )
}

export default Nav;