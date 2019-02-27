import {HashRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {LoginContainer} from "./container/login/LoginContainer.jsx";
import {AdminContainer} from "./container/admin/AdminContainer.jsx";

export const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/admin" component={AdminContainer}/>
                <Route exact path="/login" component={LoginContainer}/>
            </Switch>
        </HashRouter>
    )
}