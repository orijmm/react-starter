//Helper para quitar puntos y guiones en el rut
export const formatRutNoSymbol = (rut) => {
    return rut.replace(/\D/g,'');
}
