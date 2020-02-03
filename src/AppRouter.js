import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './Components/Login & Register/Register';
import Login from './Components/Login & Register/Login';


function AppRouter() {
    return <div>
        <Switch>
            <Route exact path="/register" component = {Register} />
            <Route exact path="/" component = {Login} />
        </Switch>
    </div>
}

export default AppRouter 