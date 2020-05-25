import React from 'react';
import './About.css';
import Logo from '../../icons/E-ssentialLogo.png'
import BackgroundImg from '../../icons/About.png'



const About = () =>{
    return(
       
        <div className='outer-about'>
            <div className="back">
            <div className='about-header'>
                <img src={Logo} alt="Essential-logo" width="350" className="EssentialLogo"/>
                <h1>About</h1>
            </div>
            <div className='about-welcome'>
                <body>Welcome to E-ssential: Your #1 stop for essential goods!</body>
            </div>
            <div className='about-body'>
                <body>Please sign up or login to view current listings or create your own.</body>
            </div>
            
            </div>
        </div>

    );
}

export default About;