import React from 'react';
import Javascript from '../assets/Images/JavaScript-Logo.png'
import Sql from '../assets/Images/Sql.png'
import Node from '../assets/Images/Nodejs.png'

const About = () => {
    return(
    <div name='about'>
        <h1>Who Am I?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
        <h2> My Favourite Languages</h2>
        <img src={Javascript} classname='cover' style={{ width: "33.3%"}} alt="cover" />
        <img src={Sql} classname='cover' style={{ width: "33.3%"}} alt="cover" />
        <img src={Node} classname='cover' style={{ width: "33.3%"}} alt="cover" />
    </div>

    )
}

export default About;