import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {testReducer} from "./reducer/test/TestReducer.jsx";
import Admin from "./Admin.jsx";
import "antd/dist/antd.css";

let reducer = combineReducers({test: testReducer});
const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Admin/>
        </HashRouter>
    </Provider>
), document.getElementById("root"));