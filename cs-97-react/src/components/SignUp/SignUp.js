import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";

const SignUp = ({ isSignUp, isAuth, setAuth }) => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  //TODO
  //What is this ding dong? How can I make this better
  const submitData = (e) => {
    e.preventDefault();
    // console.log(username);
    // console.log(email);
    // console.log(password);
    // console.log(status);
    const userData = {
      username,
      password,
      email,
      isSignUp,
    };

    axios
      .post("http://localhost:5000/users/register-login", userData, {
        withCredentials: true,
      })
      .then((res) => {
        setAuth(true);
      })
      .catch((err) => {
        if (isSignUp) {
          var errStr = err.response.data;
          setStatus(errStr);
        } else {
          setStatus("Invalid username/password");
        }
      });

    // axios.post('/users/register-login', userData)
    // .then(res => {
    //     window.location.replace('/');
    // })
    // .catch(err => {
    //     alert("Incorrect username/password combination");

    // })
  };

  return isAuth ? (
    <Redirect to="/" />

  ) : 
  
  isSignUp ? (
    <div className="sign-up-page">
      <div className="sign-up-heading">
        <p>Sign Up</p>
      </div>

      <div className='sign-up-status'>
          <p>{status}</p>
      </div>
      <form onSubmit={submitData}>
        
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={(event) => setName(event.target.value)}
            // minLength="8"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={async (event) => setPassword(event.target.value)}
            // minLength="8"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/login">Already have an account? Sign In</Link>
    </div>
  ) : (
    <div className="sign-up-page">
      <div className="sign-up-heading">
        <p>Sign In</p>
      </div>
      <div className='sign-up-status'>
          <p>{status}</p>
      </div>
      <form onSubmit={submitData}>
      
        <div>
          <input
            type="text"
            id="username"
            placeholder="Username"
            required
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <Link to="/signUp">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default SignUp;
