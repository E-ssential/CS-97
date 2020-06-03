
const {addUser, deleteUser, getUser, getUsersInRoom} = require('./chatUser');


const chatRoomManager = (io) => {

    io.on('connection', (socket) =>{
        console.log("Someone connected");
    
        //on the login event
        socket.on('joinRoom', ({name, room}, callback) => {
            console.log(name, room);
            const {error, user} = addUser({id:socket.id, name, room});
            if(error){
                return callback(error);
            }
            
            socket.emit('message', {user: 'admin', text: `Welcome ${user.name}!`});
    
            socket.broadcast.to(user.room).emit('message', {user:'admin', text: `${user.name} has joined the room`});
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
    
           //event handler for listings
        
           socket.on('newListing', (data) => {
            console.log(data);
          });
    })
}

module.exports={chatRoomManager};