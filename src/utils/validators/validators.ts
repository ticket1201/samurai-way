export type FieldValidatorType = (value:string) => string | undefined


export const required:FieldValidatorType = (value) => {
    if (value && value.trim().length) return
    return 'Field required!'
}


export const maxLengthCreator = (maxLength: number):FieldValidatorType => (value: string)=> {
    if (value && value.length <= maxLength) return
    return `Max length is ${maxLength} symbols!`
}