const nameToUppercase = (name)=>{
    let arrayName=name.split(' ')
    arrayName = arrayName.map((e)=>{
        return e.charAt(0).toUpperCase()+e.slice(1);
    })
    return arrayName.toString().replaceAll(',',' ');
}
export {nameToUppercase}