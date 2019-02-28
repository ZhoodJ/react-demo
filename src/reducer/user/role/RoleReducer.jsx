export const roleReducer = (state, action) => {
    if (!state) {
        return {
            selectedRowKeys: [],
            data: [],
        }
    }
    switch (action.type) {
        case 'role':
            return {...state, ...action.value}
        default:
            return state
    }
}