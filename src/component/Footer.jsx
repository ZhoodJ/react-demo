import React, {Component} from "react";
import {connect} from "react-redux";

class Footer extends Component {

    render() {
        return (
            <footer style={{color: this.props.themeColor}}>Footer</footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
Footer = connect(mapStateToProps)(Footer)

export default Footer;