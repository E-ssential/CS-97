import React, {useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import ChatInfoBar from '../ChatInfoBar/ChatInfoBar';
import MessageList from '../ChatMessages/MessageList';
import ChatInput from '../ChatInput/ChatInput';


import './Chat.css';

let socket;
const Chat = ({location}) => {

    const [name, setSetName] = useState('');
    const [room , setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';


    useEffect(() =>{
        const {name, room} = queryString.parse(location.search)

        socket = io(ENDPOINT);


        setSetName(name);
        setRoom(room);

        socket.emit('login', {name: name, room: room}, ()=>
        {
            
        });
        
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search])


    useEffect(()=>{

        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    //emit sendMessage to server
    const sendMessage = (event) => {
        event.preventDefault();
        socket.emit("sendMessage",message, () => {
            setMessage('');

        });
    }

    return(
        <div className="chatOuterContainer">
            <div className="chatContainer">
                <ChatInfoBar room={room}/>

                <MessageList
                    messages={messages}
                    name={name}
                />

                <ChatInput 
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </div>

        </div>
    )
}

export default Chat;