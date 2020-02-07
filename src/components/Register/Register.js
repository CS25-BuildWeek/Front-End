import React from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Register.scss";
import { ButtonContainer } from "../styled-components/Button";

function Register({ touched, errors }) {
  return (
    <div className="register">
      <div div className="reg-container">
        <p className="reg-intro">Welcome New Player!</p>
        <h1 className="welcome-text">Create an Account</h1>

        <Form className="reg-form">
          <div className="reg-inputs">
            <label style={{ fontWeight: "bold" }}>New Username</label>
            <Field
              name="username"
              placeholder="Username"
              type="username"
              autoComplete="off"
            />
            <br />
            <p>{touched.username && errors.username}</p>
          </div>

          <div className="reg-inputs">
            <label style={{ fontWeight: "bold" }}>Password</label>
            <Field
              name="password1"
              placeholder="Password"
              type="password"
              autoComplete="off"
            />
            <br />
            <p>{touched.password1 && errors.password1}</p>
          </div>

          <div className="reg-inputs">
            <label style={{ fontWeight: "bold" }}>Confirm Password</label>
            <Field
              name="password2"
              placeholder="Confirm Password"
              type="password"
              autoComplete="off"
            />
            <br />
            <p>{touched.password2 && errors.password2}</p>
          </div>
          <ButtonContainer type="submit">Sign up</ButtonContainer>
        </Form>
        <div className="loginTextContainer">
          <p style={{ color: "#fffefa" }}>Already have an account?</p>
          <Link to="/" className="login-nav">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password1: "",
      password2: ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3)
      .required(),
    password1: Yup.string()
      .min(6, "Password has to be longer than 6 characters!")
      .required("A password is required"),
    password2: Yup.string()
      .oneOf([Yup.ref("password1"), null], "Password does not match!")
      .required("Confirm Password is required")
  }),

  handleSubmit(values, formikBag) {
    const url = "https://cs-bw-mud.herokuapp.com/api/registration/";

    // console.log(values, formikBag);
    axios
      .post(url, values)
      .then(res => {
        // console.log(res);
        const token = res.data.key;
        localStorage.setItem("token", `Token ${token}`);
        formikBag.props.history.push("/");
      })
      .catch(err => {
        console.log("ERROR", err.response);
      });
  }
})(Register);
