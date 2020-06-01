const express = require('express');
var session = require('express-session')
const MongoStore = require("connect-mongo")(session);
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash = require('connect-flash');


const PORT = process.env.PORT || 5000;
const app = express();

//basic function requirement
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); 

//Connecting to the MongodbAtlas
const mongoose = require('mongoose');
const dbConfig = require('./data/database');

mongoose.connect(dbConfig.url, {useNewUrlParser:true, useUnifiedTopology: true})
        .then(console.log('connected to userDatabase'))
        .catch(err => console.log(err));
mongoose.set('useCreateIndex', true);

//Setting up Socket.io (CHAT ROOM FUNCTIONALITY)
const server = http.createServer(app);
const io = socketio(server);

const chatRoomManager = require('./chatRoom/chatRoomManager')
chatRoomManager.chatRoomManager(io);
  
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({mongooseConnection:mongoose.connection})
  }))

//passport 
const passport = require('./passport/authenticateUser');
app.use(passport.initialize());
app.use(passport.session());


//express-router
const authRouter = require('./routes/auth-router');
const listRouter = require('./routes/list-router');

app.use('/users',authRouter);
app.use('/listings', listRouter);

//TESTING
const testRouter = require('./routes/test-router');
app.use('/',testRouter);





server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
