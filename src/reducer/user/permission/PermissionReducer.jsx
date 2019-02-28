export const permissionReducer = (state, action) => {
    if (!state) {
        return {
            selectedRowKeys: [],
            data: [],
        }
    }
    switch (action.type) {
        case 'permission':
            return {...state, ...action.value}
        default:
            return state
    }
}