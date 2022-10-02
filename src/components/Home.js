import React from 'react';
import coverImage from "../assets/Images/coverImage.png"

const Home = () => {
    return(
        <div name='home'>
            <h1> Etienne Rodriguez </h1>
            <img src={coverImage} classname='cover' style={{ width: "100%"}} alt="cover" />
            <p> I am a 20 year old Full-Stack developer currently attending a UofT coding Bootcamp. Feel free to check out some of my projects, learn a bit more about me and contact me if you have any questions.</p>
        </div>
    )
}

export default Home;