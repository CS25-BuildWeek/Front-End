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
        position: "absolute",
        width: "410px",
        left: "150px",
        top: "100px",
        height: "335px",
        margin: "20px auto"
      }}
    >
      <Map />
      <Player />
    </div>
  );
};
