export const roleReducer = (state, action) => {
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
        case 'role':
            return {...state, ...action.value}
        default:
            return state
    }
}