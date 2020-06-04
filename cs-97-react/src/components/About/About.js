import React from "react";
import "./About.css";
import Logo from "../../icons/oklogo.png";

const About = ({ isAuth, userData }) => {
  const username = userData[1];

  return isAuth ? (
    <div className="about-page">
      <div className='about-welcome'>
        <h1>Welcome to E-ssential, {username}!</h1>
      </div>

      <div className="about-subheading">
        <h2>Your #1 stop for essential goods</h2>
      </div>

      <div className="about-info">
        <body>We at E-ssential recognize the crisis that the novel coronavirus (COVID-19) has caused, and the burden that it has placed on our fellow humans. One of the most pressing issues since COVID-19 was declared a global pandemic has been the shortage of essential goods. Items like masks, water, and toilet paper have become more needed and more difficult to find than ever.</body>
        <body><em>This is where we come in.</em></body>
      </div>
    
    </div>

  ) : (

    // THIS IS FOR WHEN THE USER ISN"T LOGGED IN
    <div className="about-page">
      <div className='about-welcome'>
        <h1>Welcome to E-ssential!</h1>
      </div>
      <div className="about-subheading">
        <h2>Your #1 stop for essential goods</h2>
      </div>
      <div className="about-info">
        <body>We at E-ssential recognize the crisis that the novel coronavirus (COVID-19) has caused, and the burden that it has placed on our fellow humans. One of the most pressing issues since COVID-19 was declared a global pandemic has been the shortage of essential goods. Items like masks, water, and toilet paper have become more needed and more difficult to find than ever.</body>
        <body><em>This is where we come in.</em></body>
      </div>
    </div>
    
  );
};

export default About;
