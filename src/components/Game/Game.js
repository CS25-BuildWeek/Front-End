import React, { useState, useEffect } from "react";
import axios from "axios";

export const Game = ({ history }) => {
  const [initData, setInitData] = useState();
  const [room, setRoom] = useState();

  console.log(room, "ROOM");
  console.log(initData, "InitData");

  const moveUp = () => {
    axios
      .post(
        "https://cs-mud.herokuapp.com/api/adv/move/",
        { direction: "n" },
        {
          headers: { Authorization: `Token ${history.location.state.token}` }
        }
      )
      .then(res => {
        setRoom(res.data);
      })
      .catch(err => console.log(err));

    if (room) {
      setInitData(room);
    }
  };
  const moveDown = () => {
    axios
      .post(
        "https://cs-mud.herokuapp.com/api/adv/move/",
        { direction: "s" },
        {
          headers: { Authorization: `Token ${history.location.state.token}` }
        }
      )
      .then(res => {
        setRoom(res.data);
      })
      .catch(err => console.log(err));
    if (room) {
      setInitData(room);
    }
  };
  const moveRight = () => {
    axios
      .post(
        "https://cs-mud.herokuapp.com/api/adv/move/",
        { direction: "e" },
        {
          headers: { Authorization: `Token ${history.location.state.token}` }
        }
      )
      .then(res => {
        setRoom(res.data);
      })
      .catch(err => console.log(err));
    if (room) {
      setInitData(room);
    }
  };
  const moveLeft = () => {
    axios
      .post(
        "https://cs-mud.herokuapp.com/api/adv/move/",
        { direction: "w" },
        {
          headers: { Authorization: `Token ${history.location.state.token}` }
        }
      )
      .then(res => {
        setRoom(res);
      })
      .catch(err => console.log(err));
    if (room) {
      setInitData(room);
    }
  };

  useEffect(() => {
    console.log("TOKEN", history.location.state.token);
    axios
      .get("https://cs-mud.herokuapp.com/api/adv/init/", {
        headers: { Authorization: `Token ${history.location.state.token}` }
      })
      .then(res => {
        setInitData(res.data);
      })
      .catch(err => console.log(err));
  }, [history.location.state.token]);
  console.log(initData);
  return (
    <div>
      <h1>Game</h1>
      {initData ? (
        <>
          <div className="room">
            <h1>Room: {initData.title}</h1>
            <h1>Description: {initData.description}</h1>
          </div>
          <div className="controls">
            <img
              src="https://i.imgur.com/e2IDQlk.png"
              alt="Up Arrow"
              onClick={moveUp}
            />
            <img
              src="https://i.imgur.com/BBBFpk2.png"
              alt="Down Arrow"
              onClick={moveDown}
            />
            <img
              src="https://i.imgur.com/FJPb38s.png"
              alt="Left Arrow"
              onClick={moveLeft}
            />
            <img
              src="https://i.imgur.com/v5GFmXf.png"
              alt="Right Arrow"
              onClick={moveRight}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};
