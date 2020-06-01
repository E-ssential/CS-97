
import React, { useState, useEffect  }from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import JoinRoom from './components/JoinRoom/JoinRoom';
import Chat from './components/Chat/Chat';
import ListingsForm from './components/Listings/ListingsForm';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import ListingsPage from './components/Listings/ListingsPage'

const App = () => {
    
    //TODO
    //CHECK IF USER IS AUTHENTICATED BY CALLING a function
    const [isAuth, setAuth] = useState(false);
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userID, setID] = useState("");
    const [userData, setUserData] = useState([]);
    //why is this called four times

    useEffect( () => {
        axios.get('http://localhost:5000/users/isLoggedIn', {withCredentials:true})
        .then(res => {
            setAuth(true);
            setID(res.data.id);
            setName(res.data.username);
            setEmail(res.data.email);
        })
        .catch(err =>{
            setAuth(false);
        })

    }, [])

    //HOW DO I PACK DATA?
    useEffect( () => {
        setUserData([userID, username, email]);
    },[username, email, userID])
    
    
    return(
    <Router>

        <NavBar isAuth={isAuth} userData={userData} setAuth={setAuth}/>
        <Route path='/' exact render={()=> <About isAuth={isAuth} userData={userData}/> }/>

        
        <Route path='/joinRoom' render={() => <JoinRoom isAuth={isAuth} userData={userData} setAuth={setAuth}/>}/>
        <Route path='/chat' component={Chat} />
        <Route path='/listingsForm' render={() => <ListingsForm isAuth={isAuth} userData={userData}/>} />
        <Route path='/Listingspage' component={ListingsPage}/>

        <Route path='/login' render={() => <SignUp isSignUp={false} isAuth={isAuth} setAuth={setAuth}/>}/>
        <Route path='/signUp' render={() => <SignUp isSignUp={true} isAuth={isAuth} setAuth={setAuth}/>}/>
    </Router>
    );
}

export default App;