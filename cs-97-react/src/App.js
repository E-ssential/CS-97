import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import JoinRoom from './components/JoinRoom/JoinRoom';
import Chat from './components/Chat/Chat';
import ListingForm from './components/ListingForm/ListingsForm';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import ListingsPage from './components/ListingsPage'

const App = () => {
    
    return(
    <Router>
        <NavBar />
        <Route path='/' exact component={About}/>
        <Route path='/about' component={About}/>

        <Route path='/joinRoom' component={JoinRoom}/>
        <Route path='/chat' component={Chat}/>
        <Route path='/listingsForm' component={ListingForm}/>
        <Route path='/ListingsPage' component={ListingsPage}/>

        <Route path='/login' render={() => <SignUp isSignUp={false}/>}/>
        <Route path='/signUp' render={() => <SignUp isSignUp={true}/>}/>
    </Router>
    );
}

export default App;