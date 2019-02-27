export const adminReducer = (state, action) => {
    if (!state) {
        return {
            collapsed: false
        }
    }
    switch (action.type) {
        case 'collapsed':
            return {...state, collapsed: action.value}
        default:
            return state
    }
}