export const userReducer = (state, action) => {
    if (!state) {
        return {
            selectedRowKeys: [],
            data: [],
        }
    }
    switch (action.type) {
        case 'user':
            return {...state, ...action.value}
        default:
            return state
    }
}