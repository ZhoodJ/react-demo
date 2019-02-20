import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import {BrowserRouter, Route, Link} from "react-router-dom";

ReactDOM.render((
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    </BrowserRouter>
), document.getElementById("root"));