import React, {Component} from "react";
import {connect} from "react-redux";

class Header extends Component {

    render() {
        return (
            <h3 style={{color: this.props.themeColor}}>Header</h3>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
Header = connect(mapStateToProps)(Header)

export default Header;
