import {Route} from "react-router-dom";
import React from "react";
import {HomeContainer} from "../../container/home/HomeContainer.jsx";

export const HomeRouter = () => {
    return (
        <div>
            <Route exact path="/" component={HomeContainer}/>
        </div>
    )
}