import {connect} from "react-redux";
import Permission from "../../../component/user/permission/Permission.jsx";
import {changeDataAction, changeSelectedAction} from "../../../action/user/permission/PermissionAction.jsx";

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

export const PermissionContainer = connect(mapStateToProps, mapDispatchToProps)(Permission);
