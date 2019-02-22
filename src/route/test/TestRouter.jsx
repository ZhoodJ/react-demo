import {Route} from "react-router-dom";
import React from "react";
import {TestContainer} from "../../container/test/TestContainer.jsx";

export const TestRouter = () => {
    return (
        <div>
            <Route path="/test" component={TestContainer}/>
        </div>
    )
}