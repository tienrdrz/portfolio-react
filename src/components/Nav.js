import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav ()  {
    return(
        <header>
  <h2>
    <Link to="/">
    Portfolio
    </Link>
  </h2>
  <nav className='navbar'>
    <ul className="flex-row">
      <li className="mx-2">
        <Link to="/home">
          Home
        </Link>
      </li>
      <li className="mx-2">
        <Link to="/projects">
          My Projects
        </Link>
      </li>
      <li className="mx-2">
        <Link to="/about">
          About me
        </Link>
      </li>
      <li className="mx-2">
        <Link to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
        </header>
    )
}
