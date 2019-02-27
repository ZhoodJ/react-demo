import React from "react";
import ReactDOM from "react-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {loginReducer} from "./reducer/login/LoginReducer.jsx";
import {adminReducer} from "./reducer/admin/AdminReducer.jsx";
import {userReducer} from "./reducer/user/user/UserReducer.jsx";
import {App} from "./router/router.jsx";
import "antd/dist/antd.css";

let reducer = combineReducers({admin: adminReducer, login: loginReducer, user: userReducer});
const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById("root"));