import {connect} from "react-redux";
import Admin from "../../component/admin/Admin.jsx";
import {adminAction} from "../../action/admin/AdminAction.jsx";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        save: (value) => {
            dispatch(adminAction(value))
        }
    }
}

export const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Admin));
