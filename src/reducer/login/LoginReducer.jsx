export const loginReducer = (state, action) => {
    if (!state) {
        return {
            email: '',
            password: '',
            rememberMe: false,
        }
    }
    switch (action.type) {
        case 'login':
            return {...state, ...action.value}
        default:
            return state
    }
}