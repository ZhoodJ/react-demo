import React from "react";
import ReactDOM from "react-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {testReducer} from "./reducer/test/TestReducer.jsx";
import {App} from "./router.jsx";
import "antd/dist/antd.css";

let reducer = combineReducers({test: testReducer});
const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById("root"));