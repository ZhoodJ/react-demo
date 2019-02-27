import {Route} from "react-router-dom";
import React from "react";
import {UserContainer} from "../../container/user/user/UserContainer.jsx";

export const UserRouter = () => {
    return (
        <div>
            <Route exact path="/admin/user/user" component={UserContainer}/>
        </div>
    )
}