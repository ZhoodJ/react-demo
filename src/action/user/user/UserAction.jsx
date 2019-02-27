export const changeSelectedAction = (value) => {
    return {type: 'selectedRowKeys', value: value}
}

export const changeDataAction = (value) => {
    return {type: 'data', value: value}
}