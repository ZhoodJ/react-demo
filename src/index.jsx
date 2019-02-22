import React from "react";
import ReactDOM from "react-dom";
import {HomeRouter} from "./route/home/HomeRouter.jsx";
import {TestRouter} from "./route/test/TestRouter.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {testReducer} from "./reducer/test/TestReducer.jsx";
import {homeReducer} from "./reducer/home/HomeReducer.jsx";
import "antd/dist/antd.css";

let reducer = combineReducers({test: testReducer, home: homeReducer});
const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" children={HomeRouter}/>
                <Route exact path="/menu" children={TestRouter}/>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById("root"));