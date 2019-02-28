import {connect} from "react-redux";
import Role from "../../../component/user/role/Role.jsx";
import {roleAction} from "../../../action/user/role/RoleAction.jsx";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        save: (value) => {
            dispatch(roleAction(value))
        }
    }
}

export const RoleContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Role));
