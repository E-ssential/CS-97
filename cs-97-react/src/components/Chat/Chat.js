import React, {useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import ChatInfoBar from '../ChatInfoBar/ChatInfoBar';
import MessageList from '../ChatMessages/MessageList';
import ChatInput from '../ChatInput/ChatInput';
import { useLocation } from 'react-router-dom';

import './Chat.css';

let socket;
const Chat = () => {

    const [name, setSetName] = useState('');
    const [room , setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';
    const isValid = name && room;

    const location = useLocation();

    useEffect(() =>{
        
        
        const {name, room} = queryString.parse(location.search)

        socket = io(ENDPOINT);

        if(!name || !room){

            return;
        }
        else{

            setSetName(name);
            setRoom(room);

            socket.emit('joinRoom', {name: name, room: room}, ()=>
            {
                
            });
            
            return () => {
                socket.emit('disconnect');
                socket.off();
            }

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


        isValid?
        (
                <div className="chat-container">
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



        )

        :

        (
            <div className="chat-placeholder">
                <h1>Select a room to start chatting</h1>
            </div>

        )
        
    )
}

export default Chat;