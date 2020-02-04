import React, { useState, useEffect } from "react";
import axios from "axios";

export const Game = ({ history }) => {
  const [initData, setInitData] = useState();

  useEffect(() => {
    console.log("TOKEN", history.location.state.token);
    axios
      .get("http://127.0.0.1:8000/api/adv/init/", {
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
        <div>
          <h1>Room: {initData.title}</h1>
          <h1>Description: {initData.description}</h1>
        </div>
      ) : null}
    </div>
  );
};
