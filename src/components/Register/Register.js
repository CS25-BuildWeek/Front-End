import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <div>
          <input
            placeholder="Username"
            type="username"
            name="username"
            onChange={handleChange}
            value={inputs.username}
            required
          />
          <input
            placeholder="Password"
            type="password"
            name="password1"
            onChange={handleChange}
            value={inputs.password1}
            required
          />
          <input
            placeholder="Confirm Password"
            type="password"
            name="password2"
            onChange={handleChange}
            value={inputs.password2}
            required
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <div>
        Already Sign up? <Link to="/">Login Here</Link>
      </div>
    </div>
  );
};

export default Register;
