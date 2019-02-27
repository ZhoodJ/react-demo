export const userReducer = (state, action) => {
    if (!state) {
        return {
            selectedRowKeys: ["1"],
            data: [{
                key: '1',
                id: '111111',
                email: '363408268@qq.com',
                name: '蔡忞晟',
                password: '19960821',
                salt: '123456'
            }, {
                key: '2',
                id: '222222',
                email: '2607222687@qq.com',
                name: '小蔡',
                password: '19960821',
                salt: '123456'
            }],
        }
    }
    switch (action.type) {
        case 'selectedRowKeys':
            return {...state, selectedRowKeys: action.value}
        case 'data':
            return {...state, data: action.data}
        default:
            return state
    }
}