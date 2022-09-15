export const updateObjectInArray = (array: Array<any>, itemId: string, objPropName:string, newObjProps:object) => {
   return array.map(el => el[objPropName] === itemId ? {...el, ...newObjProps} : el)
}