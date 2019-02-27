export const loginReducer = (state, action) => {
    if (!state) {
        return {
            email: '',
            password: '',
            rememberMe: false
        }
    }
    switch (action.type) {
        case 'email':
            return {...state, email: action.value}
        case 'password':
            return {...state, password: action.value}
        case 'rememberMe':
            return {...state, rememberMe: action.value}
        default:
            return state
    }
}