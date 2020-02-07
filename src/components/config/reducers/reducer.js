import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  INITIALIZE_START,
  INITIALIZE_SUCCESS,
  INITIALIZE_FAIL,
  ROOMS_START,
  ROOMS_SUCCESS,
  ROOMS_FAIL,
  MOVE_START,
  MOVE_SUCCESS,
  MOVE_FAIL,
  SAY_START,
  SAY_SUCCESS,
  SAY_FAIL,
  SUBSCRIBE_CHAT_START,
  SUBSCRIBE_CHAT_SUCCESS
} from "../actions";

const initialState = {
  username: "",
  spriteLocation: "0px 0px",
  position: [0, 0],
  currentRoom: {
    title: "",
    description: "",
    players: [],
    items: [],
    coords: [],
    exits: {
      n_to: null,
      s_to: null,
      e_to: null,
      w_to: null
    }
  },
  allRooms: [],
  exploredRooms: [],
  isLoggedIn: false,
  isLoadingPlayer: false,
  isLoadingRooms: false
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: ""
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload
      };
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: ""
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload
      };
    case INITIALIZE_START:
      return {
        ...state,
        isLoadingPlayer: true,
        error: ""
      };
    case INITIALIZE_SUCCESS:
      return {
        ...state,
        isLoadingPlayer: false,
        username: action.payload.data.name,
        exploredRooms: action.payload.data.visited_room_ids,
        currentRoom: {
          title: action.payload.data.title,
          description: action.payload.data.description,
          players: action.payload.data.players,
          coords: action.payload.data.coords,
          exits: {
            n_to: action.payload.data.n_to,
            s_to: action.payload.data.s_to,
            e_to: action.payload.data.e_to,
            w_to: action.payload.data.w_to
          }
        },
        error: ""
      };
    case INITIALIZE_FAIL:
      return {
        ...state,
        isLoadingPlayer: false,
        error: action.payload
      };
    case ROOMS_START:
      return {
        ...state,
        isLoadingRooms: true,
        error: ""
      };
    case ROOMS_SUCCESS:
      return {
        ...state,
        isLoadingRooms: false,
        allRooms: action.payload.data,
        error: ""
      };
    case ROOMS_FAIL:
      return {
        ...state,
        isLoadingRooms: false,
        error: action.payload
      };
    case MOVE_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case MOVE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        exploredRooms: action.payload.data.visited_room_ids,
        currentRoom: {
          title: action.payload.data.title,
          description: action.payload.data.description,
          players: action.payload.data.players,
          coords: action.payload.data.coords,
          exits: {
            n_to: action.payload.data.n_to,
            s_to: action.payload.data.s_to,
            e_to: action.payload.data.e_to,
            w_to: action.payload.data.w_to
          }
        },
        error: ""
      };
    case MOVE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default playerReducer;
