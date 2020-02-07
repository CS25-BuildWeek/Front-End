import axios from "axios";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";
export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

const backendURL = "https://cs-bw-mud.herokuapp.com/api";

export const registerUser = (regInfo, history) => dispatch => {
  dispatch({ type: REGISTER_USER_START });

  axios
    .post(`${backendURL}/registration/`, regInfo)
    .then(res => {
      console.log("res from registerUser", res);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res });
      localStorage.setItem("token", res.data.key);
      history.push("/game");
    })
    .catch(err => {
      console.log("error from registerUser", err);
      dispatch({ type: REGISTER_USER_FAIL, payload: err });
    });
};

export const loginUser = (loginInfo, history) => dispatch => {
  dispatch({ type: LOGIN_USER_START });

  axios
    .post(`${backendURL}/login/`, loginInfo)
    .then(res => {
      console.log("res from loginUser", res);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res });
      localStorage.setItem("token", res.data.key);
      history.push("/game");
    })
    .catch(err => {
      console.log("err from loginUser", err);
      dispatch({ type: LOGIN_USER_FAIL, payload: err });
    });
};
