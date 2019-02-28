export const userReducer = (state, action) => {
    if (!state) {
        return {
            selectedRowKeys: [],
            data: [],
        }
    }
    switch (action.type) {
        case 'user_selectedRowKeys':
            return {...state, selectedRowKeys: action.value}
        case 'user_data':
            return {...state, data: action.value}
        default:
            return state
    }
}