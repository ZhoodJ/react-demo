import {connect} from "react-redux";
import User from "../../../component/user/user/User.jsx";
import {withRouter} from "react-router-dom";
import {userAction} from "../../../action/user/user/UserAction.jsx";

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        save: (value) => {
            dispatch(userAction(value))
        }
    }
}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(User));
