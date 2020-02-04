import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../styled-components/Button";
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
    <div className="login">
      <div className="formContainer">
        <h1 className="formTitle">Welcome back!</h1>
        <p className="signinText">Sign in with your username and password.</p>
        <form onSubmit={submitHandler} className="loginForm">
          <p className="loginInputs">
            <label style={{ fontWeight: "bold" }}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Login..."
              value={user.username}
              onChange={inputHandler}
            />
          </p>
          <p className="loginInputs">
            <label style={{ fontWeight: "bold" }}>Email</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password..."
              value={user.password}
              onChange={inputHandler}
            />
          </p>
          <ButtonContainer onClick={submitHandler}>Sign In</ButtonContainer>
        </form>
        <div className="signinTextContainer">
          <p className=" signinTextForMobile">Don't have an account?</p>
          <Link to="/register">
            <p className="signupNav">Sign up</p>
          </Link>
        </div>
      </div>
      <img
        src="https://i.imgur.com/JqKzn9p.jpg"
        alt="Gameboy"
        className="loginImage"
      />
    </div>
  );
}

export default Login;
