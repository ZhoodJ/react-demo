import {connect} from "react-redux";
import ReduxPage from "../component/ReduxPage.jsx";
import {changeColorAction} from "../action/ChangeColorAction.jsx";

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

export const ReduxPageContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxPage);
