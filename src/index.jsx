import React from "react";
import ReactDOM from "react-dom";
import {HomeRouter} from "./route/home/HomeRouter.jsx";
import {TestRouter} from "./route/test/TestRouter.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {homeReducer} from "./reducer/home/HomeReducer.jsx";
import "antd/dist/antd.css";

//let reducer = combineReducers({test:testReducer,home:homeReducer});
const store = createStore(homeReducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" children={HomeRouter}/>
                <Route path="/menu" children={TestRouter}/>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById("root"));