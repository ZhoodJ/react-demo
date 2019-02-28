import {Route} from "react-router-dom";
import React from "react";
import {UserContainer} from "../../container/user/user/UserContainer.jsx";
import {RoleContainer} from "../../container/user/role/RoleContainer.jsx";
import {PermissionContainer} from "../../container/user/permission/PermissionContainer.jsx";

export const UserRouter = () => {
    return (
        <div>
            <Route exact path="/admin/user/user" component={UserContainer}/>
            <Route exact path="/admin/user/role" component={RoleContainer}/>
            <Route exact path="/admin/user/permission" component={PermissionContainer}/>
        </div>
    )
}