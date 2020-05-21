import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';



const About = () =>{
    return(
        <div className='outer-about'>
            <div className='about-header'>
                <h1>About</h1>
            </div>
            <div className='about-welcome'>
                <body>Welcome to E-ssential: Your #1 stop for essential goods!</body>
            </div>
            <div className='about-body'>
                <body>Please sign up or login to view current listings or create your own.</body>
            </div>
        </div>

    );
}

export default About;