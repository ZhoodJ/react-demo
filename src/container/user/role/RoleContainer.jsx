import {connect} from "react-redux";
import Role from "../../../component/user/role/Role.jsx";
import {changeDataAction, changeSelectedAction} from "../../../action/user/role/RoleAction.jsx";

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

export const RoleContainer = connect(mapStateToProps, mapDispatchToProps)(Role);
