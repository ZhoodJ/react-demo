import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./component/HomePage.jsx";
import {ReduxPageContainer} from "./container/ReduxPageContainer.jsx";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reduxPageReducer} from "./reducer/ReduxPageReducer.jsx";

const store = createStore(reduxPageReducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/redux">redux</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={HomePage}/>
                <Route path="/redux" component={ReduxPageContainer}/>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById("root"));