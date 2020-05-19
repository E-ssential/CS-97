//using socket.io instead of http request
//becuase they are faster

const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');
const {addUser, deleteUser, getUser, getUserInRoom} = require('./users');

const PORT = process.env.PORT || 5000;

//Setting up Socket.io
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) =>{
    console.log("Someone connected");

    //on the login event
    socket.on('login', ({name, room}, callback) => {
        // console.log(name);
        // console.log(room);

        //Error Checking
        const {error, user} = addUser({id:socket.id, name, room});
        if(error){
            return callback(error);
        }
        
        socket.emit('message', {user: 'admin', text: `Welcome, ${user.name}!`});

        socket.broadcast.to(user.room).emit('message', {user:'admin', text: `${user.name}, has joine`});
        socket.join(user.room);

        callback();
    });


    //user send messages
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user:user.name, text: message});

        callback();

    });








    //user disconnected
    socket.on('disconnect', ()=>{
    console.log('Goodbye traveler of the WWW');

    });
})





app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
