export const roleReducer = (state, action) => {
    if (!state) {
        return {
            selectedRowKeys: [],
            data: [],
        }
    }
    switch (action.type) {
        case 'role_selectedRowKeys':
            return {...state, selectedRowKeys: action.value}
        case 'role_data':
            return {...state, data: action.value}
        default:
            return state
    }
}