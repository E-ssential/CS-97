import React from 'react';
import './About.css';
import Logo from '../../icons/E-ssentialLogo.png'
import BackgroundImg from '../../icons/About.png'



const About = ({isAuth, userData}) =>{
    const userID = userData[0];
    const username = userData[1];
    const email = userData[2];

    return(
       isAuth?

        (
       
        <div className='outer-about'>
            <div className="back">
            <div className='about-header'>
                <img src={Logo} alt="Essential-logo" width="350" className="EssentialLogo"/>
                <h1>About</h1>
            </div>
            <div className='about-welcome'>
                <h3>Welcome back {username}! Hope you are having a good day</h3>
            </div>
            </div>
        </div>

        )

        :

        (

        <div className='outer-about'>
            <div className="back">
            <div className='about-header'>
                <img src={Logo} alt="Essential-logo" width="350" className="EssentialLogo"/>
                <h1>About</h1>
            </div>
            <div className='about-welcome'>
                <h3>Welcome to E-ssential: Your #1 stop for essential goods!</h3>
            </div>
            <div className='about-body'>
                <h3>Please sign up or login to view current listings or create your own.</h3>
            </div>
            
            </div>
        </div>


            
        )

    )

}

export default About;