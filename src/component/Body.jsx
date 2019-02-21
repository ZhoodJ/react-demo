import React, {Component} from "react";
import {connect} from "react-redux";
import {changeColorAction} from "../action/ChangeColorAction.jsx";

class Body extends Component {

    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleSwitchColor.bind(this, "red")}>Red</button>
                <button onClick={this.handleSwitchColor.bind(this, "blue")}>Blue</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch(changeColorAction(color))
        }
    }
}

Body = connect(mapStateToProps, mapDispatchToProps)(Body);

export default Body;