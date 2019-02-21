import React, {Component} from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

class Home extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default Home;
