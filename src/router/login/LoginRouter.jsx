import {Route} from "react-router-dom";
import React from "react";
import {LoginContainer} from "../../container/login/LoginContainer.jsx";

export const LoginRouter = () => {
    return (
        <div>
            <Route path="/login" component={LoginContainer}/>
        </div>
    )
}