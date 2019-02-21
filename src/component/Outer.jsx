import React, {Component} from "react";
import PropTypes from "prop-types";
import Inner from "./Inner.jsx";

class Outer extends Component {

    constructor() {
        super();
        this.state = {themeColor: "red"};
    }

    getChildContext() {
        return {themeColor: this.state.themeColor}
    }

    render() {
        return (
            <Inner/>
        )
    }
}

Outer.childContextTypes = {
    themeColor: PropTypes.string
}

export default Outer;