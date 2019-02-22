export const homeReducer = (state, action) => {
    if (!state) {
        return {
            collapsed: false
        }
    }
    switch (action.type) {
        case 'CHANGE_COLLAPSED':
            return {...state, collapsed: action.collapsed}
        default:
            return state
    }
}