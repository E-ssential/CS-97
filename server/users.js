const users = [];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    
    //see if the user already exist
    const checkUser = users.find( (user) => {user.room === room && user.name === name});
    if(!name || !room){
        return {error: "Please Enter a username and name"};
    }
    if(checkUser){
        return {error: "Username is taken"};
    }
    else{
        const user = {id, name, room};
        users.push(user);
        return {user};

    }

}

const deleteUser = (id) =>{
    const checkIndex = users.findIndex((user) => {user.id === id});

    if(checkIndex !== -1){
        users.splice(index,1)[0];
    }
    else{
        return {error: "Username does not exist"};
    }

}


const getUser = (id) => {
    const foundUser = users.find((user) => user.id === id);

    return foundUser;

}

const getUserInRoom = (room) => {
    return users.filter((user) => user.room === room);

}

module.exports = {addUser, deleteUser, getUser, getUserInRoom};