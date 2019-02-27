import {HashRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {LoginRouter} from "./login/LoginRouter.jsx";
import {AdminRouter} from "./admin/AdminRouter.jsx";

export const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/admin" component={AdminRouter}/>
                <Route path="/login" component={LoginRouter}/>
            </Switch>
        </HashRouter>
    )
}