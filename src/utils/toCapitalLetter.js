export const toCapitalLetter = (word) => {
      // direccion
    return word.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    
}