import {Route} from "react-router-dom";
import React from "react";
import {AdminContainer} from "../../container/admin/AdminContainer.jsx";

export const AdminRouter = () => {
    return (
        <div>
            <Route path="/admin" component={AdminContainer}/>
        </div>
    )
}