export const adminReducer = (state, action) => {
    if (!state) {
        return {
            collapsed: false,
            name: '',
        }
    }
    switch (action.type) {
        case 'admin':
            return {...state, ...action.value}
        default:
            return state
    }
}