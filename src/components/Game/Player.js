import React from "react";
import walkSprite from "./walkSprite.png";
import handleMovement from "./Movement";
import { useSelector, useDispatch } from "react-redux";

const Player = props => {
  const state = useSelector(state => state);
  console.log(state);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        position: "absolute",
        top: state.player.position[1],
        left: state.player.position[0],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: state.player.spriteLocation,
        width: "40px",
        height: "40px"
      }}
    />
  );
};

export default handleMovement(Player);
