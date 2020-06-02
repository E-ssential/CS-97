
import React, { useState, useEffect  }from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import JoinRoom from './components/JoinRoom/JoinRoom';
import Chat from './components/Chat/Chat';
import ListingsForm from './components/Listings/ListingsForm';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import ViewListings from './components/Listings/ViewListings'
import ViewProfile from './components/Profile/ViewProfile';

import './page-view.css';


const App = () => {
    
    //TODO
    //CHECK IF USER IS AUTHENTICATED BY CALLING a function
    const [isAuth, setAuth] = useState(false);
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userID, setID] = useState("");
    const [userData, setUserData] = useState([]);
    //why is this called four times


    const checkLogIn = async () => {

        axios.get('http://localhost:5000/users/isLoggedIn', {withCredentials:true})
        .then(async res => {
            await setAuth(true);
            await setID(res.data.id);
            await setName(res.data.username);
            await setEmail(res.data.email);
        })
        .catch(async err =>{
            await setAuth(false);
        })

    }

    useEffect( () => {
        checkLogIn();

    }, [isAuth])

    //HOW DO I PACK DATA?
    useEffect( () => {
        setUserData([userID, username, email]);
    },[username, email, userID])
    
    
    return(
    <Router>

        <NavBar isAuth={isAuth} userData={userData} setAuth={setAuth} checkLogin={checkLogIn}/>

        <div className="page-view">
        <Route path='/' exact render={()=> <About isAuth={isAuth} userData={userData}/> }/>

        
        <Route path='/joinRoom' render={() => <JoinRoom userData={userData} checkLogin={checkLogIn}/>}/>
        <Route path='/chat' component={Chat} />
        <Route path='/listingsForm' render={() => <ListingsForm isAuth={isAuth} userData={userData}/>} />
        <Route path='/Listingspage' component={ViewListings}/>

        <Route path='/profile' render={() => <ViewProfile userData={userData} checkLogin={checkLogIn}/>} />
        <Route path='/login' render={() => <SignUp isSignUp={false} isAuth={isAuth} setAuth={setAuth}/>}/>
        <Route path='/signUp' render={() => <SignUp isSignUp={true} isAuth={isAuth} setAuth={setAuth}/>}/>
        </div>
    </Router>
    );
}

export default App;