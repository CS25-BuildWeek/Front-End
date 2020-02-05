import axios from "axios";

export const CHANGE_LOCATION = "CHANGE_LOCATION";

export const changeLocation = props => dispatch => {
  console.log(props, "PROPS");
  axios
    .post(
      "https://cs-mud.herokuapp.com/api/adv/move/",
      { direction: "w" },
      {
        headers: {
          Authorization: `Token ${history.location.state.token}`
        }
      }
    )
    .then(res => {
      setRoom(res);
    })
    .catch(err => console.log(err));
  if (room) {
    dispatch();
  }
};
