//using socket.io instead of http request
//becuase they are faster

const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');
const {addUser, deleteUser, getUser, getUsersInRoom} = require('./users');

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

        socket.broadcast.to(user.room).emit('message', {user:'admin', text: `${user.name}, has joined the room`});
        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
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
    const user = deleteUser(socket.id);

      if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }

    });
})





app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));