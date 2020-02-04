import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const [user, setUser] = useState({ username: "", password: "" });

  function inputHandler(event) {
    console.log(event.target.value);
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
  }

  function submitHandler(event) {
    event.preventDefault();
    axios
      .post(`https://lambda-mud-test.herokuapp.com/api/login/`, user)
      .then(res => {
        if (res.status === 200 && res.data) {
          const token = res.data.key;
          localStorage.setItem("token", `Token ${token}`);
          props.history.push("/game");
        }
      })
      .catch(err => {
        if (err) console.error(err);
      });
  }

  return (
    <div>
      <div>
        <h1>MUD Adventure</h1>
        <h2>Please Login</h2>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Username"
            value={user.username}
            onChange={inputHandler}
          />
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Password"
            value={user.password}
            onChange={inputHandler}
          />
          <button onClick={submitHandler}>Login</button>
        </form>
        <div>
          or Signup <Link to="/register">Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
