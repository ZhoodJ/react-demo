import React, {Component} from "react";
import {Button} from 'antd';

class ReduxPage extends Component {

    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
            <div>
                <h3 style={{color: this.props.themeColor}}>Header</h3>
                <div>
                    <Button onClick={this.handleSwitchColor.bind(this, "red")}>Red</Button>
                    <Button onClick={this.handleSwitchColor.bind(this, "blue")}>Blue</Button>
                </div>
                <footer style={{color: this.props.themeColor}}>Footer</footer>
            </div>
        )
    }
}

export default ReduxPage;
