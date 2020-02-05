const initialState = {
  spriteLocation: "0px 0px",
  position: [0, 0],
  location: ""
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...action.payload
      };
    case "CHANGE_LOCATION":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default playerReducer;
