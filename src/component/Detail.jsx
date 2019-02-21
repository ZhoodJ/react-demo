import React,{Component} from "react";
import WrapWithData from "./WrapWithData.jsx";

class Detail extends Component{
    render(){
        return <div>{this.props.data}</div>
    }
}

export default WrapWithData(Detail,"hello");