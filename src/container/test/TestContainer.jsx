import {connect} from "react-redux";
import Test from "../../component/test/Test.jsx";
import {changeColorAction} from "../../action/test/ChangeColorAction.jsx";

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

export const TestContainer = connect(mapStateToProps, mapDispatchToProps)(Test);
