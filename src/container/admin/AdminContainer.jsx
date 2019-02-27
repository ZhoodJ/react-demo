import {connect} from "react-redux";
import Admin from "../../component/admin/Admin.jsx";
import {changeCollapsedAction} from "../../action/admin/AdminAction.jsx";

const mapStateToProps = (state) => {
    return {
        collapsed: state.admin.collapsed
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
