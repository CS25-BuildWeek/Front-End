import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../styled-components/Button";
import axios from "axios";
import "./Register.scss";

const Register = props => {
  const [inputs, setInputs] = useState({
    username: "",
    password1: "",
    password2: ""
  });

  const registerUser = newUser => {
    axios
      .post(`https://cs-mud.herokuapp.com/api/registration/`, newUser)
      .then(res => {
        const token = res.data.key;
        localStorage.setItem("token", `Token ${token}`);
        props.history.push("/");
      })
      .catch(err => {
        console.log("ERROR", err.response);
      });
  };

  const handleSubmit = event => {
    console.log("UserState:", inputs);
    if (event) {
      event.preventDefault();
      registerUser(inputs);
    }
  };

  const handleChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className="register">
      <div className="reg-container">
        <p className="reg-intro">Welcome New Player!</p>
        <h1 className="welcome-text">Create an Account</h1>
        <form className="reg-form" onSubmit={handleSubmit}>
          <p className="reg-inputs">
            <label style={{ fontWeight: "bold" }}>New Username</label>
            <input
              placeholder="Username"
              type="username"
              name="username"
              onChange={handleChange}
              value={inputs.username}
              required
            />
          </p>
          <p className="reg-inputs">
            <label style={{ fontWeight: "bold" }}>Password</label>
            <input
              placeholder="Password"
              type="password"
              name="password1"
              onChange={handleChange}
              value={inputs.password1}
              required
            />
          </p>
          <p className="reg-inputs">
            <label style={{ fontWeight: "bold" }}>Confirm Password</label>
            <input
              placeholder="Confirm Password"
              type="password"
              name="password2"
              onChange={handleChange}
              value={inputs.password2}
              required
            />
          </p>
          <ButtonContainer type="submit">Sign up</ButtonContainer>
        </form>
        <div className="loginTextContainer">
          <p style={{ color: "#fffefa" }}>Already have an account?</p>
          <Link to="/">
            <p className="login-nav">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
