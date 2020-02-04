import React from "react";
import { Switch, Route } from "react-router-dom";

import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default Routes;
