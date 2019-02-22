import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./component/HomePage.jsx";
import {ReduxPageContainer} from "./container/ReduxPageContainer.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reduxPageReducer} from "./reducer/ReduxPageReducer.jsx";
import "antd/dist/antd.css";

const store = createStore(reduxPageReducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route path="/redux" component={ReduxPageContainer}/>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById("root"));