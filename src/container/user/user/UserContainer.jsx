import {connect} from "react-redux";
import User from "../../../component/user/user/User.jsx";
import {changeDataAction, changeSelectedAction} from "../../../action/user/user/UserAction.jsx";

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDataChange: (value) => {
            dispatch(changeDataAction(value))
        },
        onSelectedChange: (value) => {
            dispatch(changeSelectedAction(value))
        }
    }
}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);
