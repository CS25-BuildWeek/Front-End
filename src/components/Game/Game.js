import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Game.css";
import img from "./Game-Pics/GameBoy.png";
import { World } from "./World";
import { useSelector, useDispatch } from "react-redux";
import { initialize, getRooms, move } from "../config/actions";

export const Game = ({ history }) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  console.log("REDUX STATE", state);
  console.log("CURRENT ROOM", state.player.currentRoom);
  console.log("CURRENT ROOM TITLE", state.player.currentRoom.title);

  const movement = e => {
    // e.preventDefault();
    console.log(e.keyCode, "EVENT");
    switch (e.keyCode) {
      case 37:
        dispatch(move("w"));
        break;
      case 38:
        dispatch(move("n"));
        break;
      case 39:
        dispatch(move("e"));
        break;
      case 40:
        dispatch(move("s"));
        break;
      default:
        console.log(e.keyCode);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    dispatch(initialize());
    dispatch(getRooms());
    window.addEventListener("keydown", e => {
      movement(e);
    });
  }, []);
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

        {state.player.currentRoom ? (
          <>
            <div className="room">
              <p>Room: {state.player.currentRoom.title}</p>
              <p>Description: {state.player.currentRoom.description}</p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
