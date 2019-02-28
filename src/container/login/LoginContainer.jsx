import {connect} from "react-redux";
import Login from "../../component/login/Login.jsx";
import {loginAction} from "../../action/login/LoginAction.jsx";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        save: (value) => {
            dispatch(loginAction(value))
        }
    }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
