import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/Home.jsx";
import Detail from "./component/Detail.jsx";
import Outer from "./component/Outer.jsx";
import {BrowserRouter, Link, Route} from "react-router-dom";

ReactDOM.render((
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/detail">Detail</Link></li>
                <li><Link to="/outer">Outer</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/outer" component={Outer}/>
        </div>
    </BrowserRouter>
), document.getElementById("root"));