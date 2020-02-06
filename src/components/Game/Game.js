import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Game.css";
import img from "./Game-Pics/GameBoy.png";
import { Player } from "./Player";
import { Map } from "./Map";
import { World } from "./World";
import { useSelector, useDispatch } from "react-redux";

export const Game = ({ history }) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [initData, setInitData] = useState();
  const [room, setRoom] = useState();
  const [map, setMap] = useState();

  console.log(room, "ROOM");
  console.log(map, "MAP");
  console.log(initData, "InitData");

  const movement = e => {
    // e.preventDefault();
    console.log(e.keyCode, "EVENT");
    switch (e.keyCode) {
      case 37:
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
          setInitData(room);
        }
        break;
      case 38:
        axios
          .post(
            "https://cs-mud.herokuapp.com/api/adv/move/",
            { direction: "n" },
            {
              headers: {
                Authorization: `Token ${history.location.state.token}`
              }
            }
          )
          .then(res => {
            setRoom(res.data);
          })
          .catch(err => console.log(err));

        if (room) {
          setInitData(room);
        }
        break;
      case 39:
        axios
          .post(
            "https://cs-mud.herokuapp.com/api/adv/move/",
            { direction: "e" },
            {
              headers: {
                Authorization: `Token ${history.location.state.token}`
              }
            }
          )
          .then(res => {
            setRoom(res.data);
          })
          .catch(err => console.log(err));
        if (room) {
          setInitData(room);
        }
        break;
      case 40:
        axios
          .post(
            "https://cs-mud.herokuapp.com/api/adv/move/",
            { direction: "s" },
            {
              headers: {
                Authorization: `Token ${history.location.state.token}`
              }
            }
          )
          .then(res => {
            setRoom(res.data);
          })
          .catch(err => console.log(err));
        if (room) {
          setInitData(room);
        }
        break;
      default:
        console.log(e.keyCode);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", e => {
      movement(e);
    });
    console.log("TOKEN", history.location.state.token);
    axios
      .get("https://cs-mud.herokuapp.com/api/adv/init/", {
        headers: { Authorization: `Token ${history.location.state.token}` }
      })
      .then(res => {
        setInitData(res.data);
      })
      .catch(err => console.log(err));

    // axios
    //   .get("https://cs-mud.herokuapp.com/api/adv/rooms/", {
    //     headers: { Authorization: `Token ${history.location.state.token}` }
    //   })
    //   .then(res => {
    //     console.log(res, "Map Response");
    //     setMap(res.data);
    //   })
    //   .catch(err => console.log(err));
  }, [history.location.state.token]);
  // console.log(initData);
  return (
    <div className="gamePage">
      <div>
        <img
          className="console"
          height="950px"
          width="800px"
          src={img}
          alt="Game-boy-img"
        />
        <World />
      </div>
      <div className="handbook">
        <h1>Adventure Game: Handbook</h1>
        <h3>Movement: Arrow Keys</h3>

        {initData ? (
          <>
            <div className="room">
              <p>Room: {initData.title}</p>
              <p>Description: {initData.description}</p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
