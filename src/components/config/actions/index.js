import axios from "axios";

export {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  registerUser,
  loginUser
} from "./authActions";

export {
  INITIALIZE_START,
  INITIALIZE_SUCCESS,
  INITIALIZE_FAIL,
  ROOMS_START,
  ROOMS_SUCCESS,
  ROOMS_FAIL,
  MOVE_START,
  MOVE_SUCCESS,
  MOVE_FAIL,
  initialize,
  getRooms,
  move
} from "./gameActions";
