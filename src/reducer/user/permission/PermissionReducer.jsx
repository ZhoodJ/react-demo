export const permissionReducer = (state, action) => {
    if (!state) {
        return {
            selectedRowKeys: [],
            data: [],
        }
    }
    switch (action.type) {
        case 'permission_selectedRowKeys':
            return {...state, selectedRowKeys: action.value}
        case 'permission_data':
            return {...state, data: action.value}
        default:
            return state
    }
}