import React from 'react';
import GiftYouUp from '../assets/Images/GiftYouUp.png';
import Jate from '../assets/Images/JATE.PNG';
import NoteTaker from '../assets/Images/NoteTaker.PNG';
import RunBuddy from '../assets/Images/RunBuddy.PNG';
import MakeADeal from '../assets/Images/MakeADeal.png'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Gift You Up",
            link: "https://github.com/tienrdrz/Gift_You_Up",
            src: GiftYouUp,
            alt: "GiftYouUp",
            desc: "A website that provides list making for gift exchanges and general organization"
        },
        {
            id: 2,
            title: "Jate",
            link: "https://github.com/tienrdrz/Text-Editor",
            src: Jate,
            alt: "JATE",
            desc: "A text-editor application"
        },
        {
            id: 3,
            title: "Note Taker",
            link: "https://github.com/tienrdrz/Note-Taker",
            src: NoteTaker,
            alt: "NoteTaker",
            desc: "A website to write, save, and delete notes"
        },
        {
            id: 4,
            title: "Run Buddy",
            link: "https://github.com/tienrdrz/run-buddy",
            src: RunBuddy,
            alt: "A mock fitness website based on HTML and CSS",
            desc: "A fitness webpage"
        },
        {
            id: 5,
            title: "MakeADeal",
            link: "https://github.com/tienrdrz/MakeADeal",
            src: MakeADeal,
            alt: "MakeADeal is a digital marketplace",
            desc: "A digital marketplace"
        },
    ]
    return(
        <div name='projects'>
            <h1> My Favourite Projects</h1>
            <p> Make sure to check out each repository!</p>
                <div className="projects-container">
                    {projects.map(({ id, title, link, src, alt }) => (
                        <div key={id} className="project">
                            <h3>{title}</h3>
                            <a href={link}><img className="project-image" src={src} alt={alt} width="304" height="228"/></a>
                        </div>
                    ))}
                </div>
        </div>
    )
}