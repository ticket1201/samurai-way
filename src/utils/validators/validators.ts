export const required = (value: string) => {
    if (value) return
    return 'Field required!'
}



export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length <= maxLength) return
    return `Max length is ${maxLength} symbols!`
}