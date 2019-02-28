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
        case 'email':
            return {...state, email: action.value}
        case 'password':
            return {...state, password: action.value}
        case 'rememberMe':
            return {...state, rememberMe: action.value}
        case 'isAuthentication':
            return {...state, isAuthentication: action.value}
        default:
            return state
    }
}