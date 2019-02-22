import React, {Component} from "react";

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
                    <button onClick={this.handleSwitchColor.bind(this, "red")}>Red</button>
                    <button onClick={this.handleSwitchColor.bind(this, "blue")}>Blue</button>
                </div>
                <footer style={{color: this.props.themeColor}}>Footer</footer>
            </div>
        )
    }
}

export default ReduxPage;
