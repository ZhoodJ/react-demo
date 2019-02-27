import {HashRouter, Route, Switch} from "react-router-dom";
import React from "react";
import Admin from "./component/admin/Admin.jsx";
import {LoginContainer} from "./container/login/LoginContainer.jsx";

export const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/admin" component={Admin}/>
                <Route exact path="/login" component={LoginContainer}/>
            </Switch>
        </HashRouter>
    )
}