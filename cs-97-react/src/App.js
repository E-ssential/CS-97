import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import JoinRoom from './components/JoinRoom/JoinRoom';
import Chat from './components/Chat/Chat';
import ListingForm from './components/ListingForm/ListingsForm';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';

const App = () => (
    

    <Router>
        <NavBar />



        <li><Link to={'/ListingsForm'} className="link"> MAKE A LISTING </Link></li>
        <li><Link to={'/Chat'} className = "chatlink">GO TO CHAT</Link></li>
        <li><Link to={'/JoinRoom'} className="link"> JOIN ROOM </Link></li>
        <li><Link to={'/Login'} className = "loginlink">LOGIN</Link></li>
        <li><Link to={'/Signup'} className="link"> SIGNUP </Link></li>
           
                                

        <Route path='/' exact component={About}/>
        <Route path='/about' component={About}/>

        <Route path='/JoinRoom' component={JoinRoom}/>
        <Route path='/Chat' component={Chat}/>
        <Route path='/ListingsForm' component={ListingForm}/>

        <Route path='/Login' render={() => <SignUp type='login'/>}/>
        <Route path='/SignUp' render={() => <SignUp type='signUp'/>}/>

    </Router>
    
)

export default App;