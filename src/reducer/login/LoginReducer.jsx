export const loginReducer = (state, action) => {
    if (!state) {
        return {
            email: '',
            password: '',
            rememberMe: false,
            isAuthentication: false
        }
    }
    switch (action.type) {
        case 'login':
            return {...state, ...action.value}
        default:
            return state
    }
}