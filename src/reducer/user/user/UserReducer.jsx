export const userReducer = (state, action) => {
    if (!state) {
        return {
            selectedRowKeys: [],
            data: [],
            selectedRow: [],
            id: '',
            email: '',
            name: '',
            password: '',
            visible: false,
            isAdd: true
        }
    }
    switch (action.type) {
        case 'user':
            return {...state, ...action.value}
        default:
            return state
    }
}