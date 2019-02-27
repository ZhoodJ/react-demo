export const userReducer = (state, action) => {
    if (!state) {
        return {
            selectedRowKeys: [],
            data: [],
        }
    }
    switch (action.type) {
        case 'selectedRowKeys':
            return {...state, selectedRowKeys: action.value}
        case 'data':
            return {...state, data: action.value}
        default:
            return state
    }
}