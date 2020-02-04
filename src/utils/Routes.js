import React from "react";
import { Switch, Route } from "react-router-dom";

import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import { Game } from "../components/Game/Game";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/game" component={Game} />
      </Switch>
    </div>
  );
}

export default Routes;
