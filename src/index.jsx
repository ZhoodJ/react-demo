import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home/Home.jsx";
import {TestRouter} from "./route/test/TestRouter.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {testReducer} from "./reducer/test/TestReducer.jsx";
import "antd/dist/antd.css";

const store = createStore(testReducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/test" component={TestRouter}/>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById("root"));