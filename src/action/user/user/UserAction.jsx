export const changeSelectedAction = (value) => {
    return {type: 'user_selectedRowKeys', value: value}
}

export const changeDataAction = (value) => {
    return {type: 'user_data', value: value}
}