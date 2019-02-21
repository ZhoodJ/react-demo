import React, {Component} from "react";
import PropTypes from "prop-types";

class Inner extends Component {

    render() {
        return (
            <div style={{color: this.context.themeColor}}>内部组件</div>
        )
    }
}

Inner.contextTypes = {
    themeColor: PropTypes.string
}

export default Inner;