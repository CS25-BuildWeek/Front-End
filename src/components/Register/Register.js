// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ButtonContainer } from "../styled-components/Button";
// import axios from "axios";
// import "./Register.scss";

// const Register = props => {
//   const [inputs, setInputs] = useState({
//     username: "",
//     password1: "",
//     password2: ""
//   });

//   const registerUser = newUser => {
//     console.log(newUser);
//     axios
//       .post(`https://cs-mud.herokuapp.com/api/registration/`, newUser)
//       .then(res => {
//         const token = res.data.key;
//         localStorage.setItem("token", `Token ${token}`);
//         props.history.push("/");
//       })
//       .catch(err => {
//         console.log("ERROR", err.response);
//       });
//   };

//   const handleSubmit = event => {
//     console.log("UserState:", inputs);
//     if (event) {
//       event.preventDefault();
//       registerUser(inputs);
//     }
//   };

//   const handleChange = event => {
//     event.persist();
//     setInputs(inputs => ({
//       ...inputs,
//       [event.target.name]: event.target.value
//     }));
//   };

// const passwordCheck = e => {
//   if ((e.password2 = e.password1)) {
//     return (
//       <div>
//         <ButtonContainer type="submit">Sign up</ButtonContainer>
//       </div>
//     );
//   } else {
//     return alert("\nPassword did not match");
//   }
// };

//   return (
//     <div className="register">
//       <div className="reg-container">
//         <p className="reg-intro">Welcome New Player!</p>
//         <h1 className="welcome-text">Create an Account</h1>
//         <form
//           className="reg-form"
//           onSubmit={(handleSubmit, passwordCheck(inputs))}
//         >
//           <p className="reg-inputs">
//             <label style={{ fontWeight: "bold" }}>New Username</label>
//             <input
//               placeholder="Username"
//               type="username"
//               name="username"
//               onChange={handleChange}
//               value={inputs.username}
//               required
//             />
//           </p>
//           <p className="reg-inputs">
//             <label style={{ fontWeight: "bold" }}>Password</label>
//             <input
//               placeholder="Password"
//               type="password"
//               name="password1"
//               onChange={handleChange}
//               value={inputs.password1}
//               required
//             />
//           </p>
//           <p className="reg-inputs">
//             <label style={{ fontWeight: "bold" }}>Confirm Password</label>
//             <input
//               placeholder="Confirm Password"
//               type="password"
//               name="password2"
//               onChange={handleChange}
//               value={inputs.password2}
//               required
//             />
//           </p>
//           {/* {passwordCheck(inputs)} */}
//           <ButtonContainer type="submit">Sign up</ButtonContainer>
//         </form>
//         <div className="loginTextContainer">
//           <p style={{ color: "#fffefa" }}>Already have an account?</p>
//           <Link to="/">
//             <p className="login-nav">Login</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

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
          <Link to="/">
            <p className="login-nav">Login</p>
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
    const url = "https://cs-mud.herokuapp.com/api/registration/";

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
