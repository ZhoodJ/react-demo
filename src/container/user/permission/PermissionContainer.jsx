import {connect} from "react-redux";
import Permission from "../../../component/user/permission/Permission.jsx";
import {permissionAction} from "../../../action/user/permission/PermissionAction.jsx";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        save: (value) => {
            dispatch(permissionAction(value))
        }
    }
}

export const PermissionContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Permission));
