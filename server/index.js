const express = require('express');
var session = require('express-session')
const MongoStore = require("connect-mongo")(session);
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const flash = require('connect-flash');

//passport
const passport = require('./passport/authenticateUser');
const auth = require('./routes/auth-router');
//functionality files


const PORT = process.env.PORT || 5000;


//Connecting to the MongodbAtlas
const mongoose = require('mongoose');
const dbConfig = require('./database');

mongoose.connect(dbConfig.url, {useNewUrlParser:true, useUnifiedTopology: true})
        .then(console.log('connected to userDatabase'))
        .catch(err => console.log(err));

mongoose.set('useCreateIndex', true);


//Setting up Socket.io
const app = express();
const server = http.createServer(app);
const io = socketio(server);

//chatroom functionality
const chatRoomManager = require('./chatRoom/chatRoomManager')
chatRoomManager.chatRoomManager(io);

//setting up the different routes
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//express session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({mongooseConnection:mongoose.connection})
  }))

//passport 
app.use(passport.initialize());
app.use(passport.session());
//express-router
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');

app.use('/users',authRouter);
app.use('/chat',userRouter);


server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
