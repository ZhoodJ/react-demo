export const changeInputValueAction = (type, value) => {
    return {type: type, value: value}
}

export const changeAuthenticationAction = (value) => {
    return {type: 'isAuthentication', value: value}
}