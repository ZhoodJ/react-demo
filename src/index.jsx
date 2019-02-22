import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {testReducer} from "./reducer/test/TestReducer.jsx";
import Admin from "./Admin.jsx";
import "antd/dist/antd.css";

let reducer = combineReducers({test: testReducer});
const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Admin/>
        </BrowserRouter>
    </Provider>
), document.getElementById("root"));