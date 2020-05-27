const express = require('express');

//Socket.IO and ClientSide
const socketio = require('socket.io');
const http = require('http');
const userRouter = require('./routes/user-router');
const cors = require('cors');
const bodyParser = require('body-parser');
const chatRoomManager = require('./chatRoomManager')

const PORT = process.env.PORT || 5000;


//Connecting to the MongodbAtlas
const mongoose = require('mongoose');
const authenticate = require('./authenticate.js');
const dbConnectionString ="mongodb+srv://admin:test1234@cluster0-yz77d.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbConnectionString, {useNewUrlParser:true, useUnifiedTopology: true}, () => {
    console.log('connected to userDatabase');
});
mongoose.set('useCreateIndex', true);
var db = mongoose.connection;

// authenticate.addNewUser();


//Setting up Socket.io
const app = express();
const server = http.createServer(app);
const io = socketio(server);

chatRoomManager.chatRoomManager(io);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/users',userRouter);


server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
