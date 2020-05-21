import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import JoinRoom from './components/JoinRoom/JoinRoom';
import Chat from './components/Chat/Chat';
import ListingForm from './components/ListingForm/ListingsForm';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';

const App = () => (
    

    <Router>
        <NavBar />


        <Route path='/' exact component={About}/>
        <Route path='/about' component={About}/>


        <Route path='/joinRoom' component={JoinRoom}/>
        <Route path='/chat' component={Chat}/>
        <Route path='/listing' component={ListingForm}/>

        <Route path='/login' render={() => <SignUp type='login'/>}/>
        <Route path='/signUp' render={() => <SignUp type='signUp'/>}/>
    </Router>
    
)

export default App;