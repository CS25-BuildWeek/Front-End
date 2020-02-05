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
    console.log(newUser);
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

// import React from "react";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { Label, Input, SignUpWrapper } from '../styledComponents/StyledComponents'

// function SignUp({ touched, errors }) {

//   return (

//     <SignUpWrapper className="wrapper">

//       <h1 className ="signup heading">Sign up</h1>

//       <Form className="singUpForm">
//         <div>
//           <Input>
//             <Label>Username</Label>
//             <Field
//               name="username"
//               type="username"
//               autoComplete="off"
//             />
//             <br/>
//             <p>{touched.username && errors.username}</p>
//           </Input>

//           <Input>
//             <Label>Full Name</Label>
//             <Field
//               name="full_name"
//               type="text"
//               autoComplete="off"
//             />
//             <br/>
//             <p>{touched.full_name && errors.full_name}</p>
//           </Input>

//           <Input >
//             <Label>Email</Label>
//             <Field
//               name="email"
//               type="email"
//               autoComplete="off"
//             />
//             <br/>
//             <p>{touched.email && errors.email}</p>
//           </Input>

//           <Input>
//             <Label>Password</Label>
//             <Field
//               name="password"
//               type="password"
//               autoComplete="off"
//             />
//             <br/>
//             <p>{touched.password && errors.password}</p>
//           </Input>

//           <button type="submit" >Submit &rarr;</button>
//         </div>
//       </Form>

//     </SignUpWrapper>
//   );
// }

// export default withFormik({

//   mapPropsToValues() {
//     return {
//       username: "",
//       email: "",
//       password: ""
//     };
//   },

//   validationSchema: Yup.object().shape({
//     username: Yup.string()
//       .min(3)
//       .required(),
//     full_name: Yup.string()
//       .min(3)
//       .required(),
//     email: Yup.string()
//       .email()
//       .required(),
//     password: Yup.string()
//       .min(6)
//       .required()
//   }),

//   handleSubmit(values, formikBag) {
//     // const url = "https://career-longevity-predictor.herokuapp.com/api/auth/register";
//     const url = "https://potluckplanner-be.herokuapp.com/users/register"

//     console.log(values)
//     axios
//       .post(url, values)
//       .then(response => {
//         console.log(response)
//         // localStorage.setItem("token");
//         formikBag.props.history.push("/users/login");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

// })(SignUp);
