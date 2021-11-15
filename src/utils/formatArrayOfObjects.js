//convertir un objeto de objetos a array de objetos
export const toArrayOfObjects = (dataObject) => {
    let ArrayOfObjects = [];
    Object.keys(dataObject).map((key,i) => {
        ArrayOfObjects[i] = dataObject[key]
    })
    return ArrayOfObjects;
}
