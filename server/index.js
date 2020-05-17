//using socket.io instead of http request
//becuase they are faster

const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');


const PORT = process.env.PORT || 5000;

//Setting up Socket.io
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) =>{
    console.log("Someone connected");

    socket.on('disconnect', ()=>{
    console.log('Goodbye traveler of the WWW');

    });
})



app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
