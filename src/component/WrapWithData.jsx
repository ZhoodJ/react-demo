import React, {Component} from "react";

export default (WrapedComponent, name) => {

    class NewComponent extends Component {

        constructor() {
            super();
            this.state = {data: null}
        }

        componentDidMount() {
            this.setState({data: name})
        }

        render() {
            return <WrapedComponent data={this.state.data}/>
        }
    }

    return NewComponent;
}