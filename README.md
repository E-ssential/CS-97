# Essential
## About
Essential is an app designed to allow users to distribute essential goods among users. It provides a listing of all the available items from different users and allow users to match with one another. The user can contact one another through the app in order to coordinate the best way to delivery the certain goods.

## Functionality
The users are broken into Group A (users with items) and Group B (users requesting items).
There are no different version or special credential for Group A or B as we want all users to have the ability to publish items and request items. 

As of right now, the Essential app allows the user to create their own user account and sign in accordingly. After doing so, useres can publish items they have and view the entire catalog of items. After finding an item, they can find a specific room where the user can meet and chat. 

## Tech Stack

The project is broken down into the client side (React Project) and server side (Node JS). The reasoning behind separating is to have an API server and a front end dedicated solely to the client. In order to avoid Cross Domain complication, we uses the CORS library and also uses a proxy server. 

- For the authentication, we uses PassportJS, Mongoose, and Express Session to verify the user and set the respective sessionID. We also use bcrypt to hash the password to ensure security. 

- For the chat system, we uses SocketIO to help manage the different rooms and send real time messages between the users. 

(EDIT THIS AFTER NEW IMPLEMENTATION)
- For the listing, we store everything in a local json file.

## Setup

For the client side 
```
cd cs-97-react
npm i
npm start
```

For the server side
```
cd server
npm i
npm start
```

Make sure both the server and the client are running in order for the app to work accordingly. 

Note: We uses MongoDB hosted on MongoDB Atlas so it might have restriction of who can access it depending on the IP. (Will make the database available to everyone in the future).
