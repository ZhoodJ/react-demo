import {connect} from "react-redux";
import Admin from "../../component/admin/Admin.jsx";
import {changeCollapsedAction} from "../../action/admin/AdminAction.jsx";

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCollapsedChange: (value) => {
            dispatch(changeCollapsedAction(value))
        }
    }
}

export const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);
