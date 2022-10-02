import React from 'react';
import coverImage from "../assets/Images/coverImage.png"

const Home = () => {
    return(
        <div>
            <h1> Etienne Rodriguez </h1>
            <img src={coverImage} classname='cover' style={{ width: "100%"}} alt="cover" />
        </div>
    )
}

export default Home;