import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/Home.jsx";
import Page from "./component/Page.jsx";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

const themeReducer = (state, action) => {
    if (!state) {
        return {
            themeColor: 'red'
        }
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, themeColor: action.themeColor}
        default:
            return state
    }
}

const store = createStore(themeReducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page">Page</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/page" component={Page}/>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById("root"));