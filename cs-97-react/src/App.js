import React from 'react';
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
