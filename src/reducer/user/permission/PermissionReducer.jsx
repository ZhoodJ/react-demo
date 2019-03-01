export const permissionReducer = (state, action) => {
    if (!state) {
        return {
            selectedRowKeys: [],
            data: [],
            selectedRow: [],
            id: '',
            name: '',
            code: '',
            visible: false,
            isAdd: true
        }
    }
    switch (action.type) {
        case 'permission':
            return {...state, ...action.value}
        default:
            return state
    }
}