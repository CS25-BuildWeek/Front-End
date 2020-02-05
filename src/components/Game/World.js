import React from "react";
import { Map } from "./Map";
import Player from "./Player";
import { useSelector, useDispatch } from "react-redux";

export const World = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "400px",
        margin: "20px auto"
      }}
    >
      <Map />
      <Player />
    </div>
  );
};
