import {connect} from "react-redux";
import Login from "../../component/login/Login.jsx";
import {changeInputValueAction} from "../../action/login/LoginAction.jsx";

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputValueChange: (type, value) => {
            dispatch(changeInputValueAction(type, value))
        }
    }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
