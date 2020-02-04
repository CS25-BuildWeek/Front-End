import React, { useState, useEffect } from "react";
import axios from "axios";

export const Game = () => {
  const [initData, setInitData] = useState();
  useEffect(() => {
    axios
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
      .then(res => {
        setInitData(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  console.log(initData);
  return (
    <div>
      <h1>Game</h1>
    </div>
  );
};
