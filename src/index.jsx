import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./component/HelloWorld.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HelloWorld}></Route>
        </Switch>
    </BrowserRouter>
), document.getElementById("root"));