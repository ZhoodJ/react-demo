export const roleReducer = (state, action) => {
    if (!state) {
        return {
            role_selectedRowKeys: [],
            role_data: [],
            role_selectedRow: [],
            permission_selectedRowKeys: [],
            permission_data: [],
            permission_selectedRow: [],
            id: '',
            name: '',
            code: '',
            visible: false,
            isAdd: true
        }
    }
    switch (action.type) {
        case 'role':
            return {...state, ...action.value}
        default:
            return state
    }
}