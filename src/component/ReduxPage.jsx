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
                <h3 style={{color: this.props.themeColor}}>这是一段文字</h3>
                <div>
                    <Button type="primary" onClick={this.handleSwitchColor.bind(this, "red")}>红色</Button>
                    <Button type="primary" onClick={this.handleSwitchColor.bind(this, "blue")}>蓝色</Button>
                </div>
            </div>
        )
    }
}

export default ReduxPage;
