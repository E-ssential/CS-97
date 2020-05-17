import React from 'react';
<<<<<<< HEAD

import { BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/Login';
import Chat from './components/Chat';


const App = () => (
    <Router>
        <Route path='/' exact component={Login}/>
        <Route path='/chat' component={Chat}/>
    </Router>
)

export default App;
=======
import './App.css';

import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';

import NavBar from './components/NavBar';
class App extends React.Component{



  render(){
    return (
      <div className="App">
        <MessageList/>
      </div>
    );
  }
}
export default App;
>>>>>>> c14b349a54ce76a8aae97c164544e4cd1a106121
