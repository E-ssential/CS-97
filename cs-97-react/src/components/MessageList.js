import React from 'react';

const DUMMY_DATA = [
    {
        senderId : "bubbles",
        text: "I like blowing bubbles"
    }, 
    
    {
        senderId : "wand", 
        text : "I like popping bubbles"
    },
    
    {
        senderId : "bubbles",
        text : "you are a monster"
    }
]

class MessageList extends React.Component{
    




    render(){
        return(
            <div className = "message-list">
                {DUMMY_DATA.map((message, index) => {
                    return(
                        <div>{message.text}</div>
                    )
                })}




            </div>
        );
    }



}

export default MessageList