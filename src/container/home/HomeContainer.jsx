import {connect} from "react-redux";
import Home from "../../component/home/Home.jsx";
import {changeCollapsedAction} from "../../action/home/ChangeCollapsedAction.jsx";

const mapStateToProps = (state) => {
    return {
        collapsed: state.collapsed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCollapsed: (flag) => {
            dispatch(changeCollapsedAction(flag))
        }
    }
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
