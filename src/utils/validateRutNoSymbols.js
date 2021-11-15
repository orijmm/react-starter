export  const validateRutNoSymbols = (rut) => {
    let $val = {
        'error' : false,
        'message' : 'todo bien'
    };

    let validMatch = rut.match(/\d{7,8}[0-9|kK]/);

    if(!validMatch){
        $val = {
            'error' : true,
            'message' : 'Rut invalido'
        };
    }else if(validMatch[0] != rut){
        $val = {
            'error' : true,
            'message' : 'Rut invalido'
        };
    }

    //return rut.length > 6 && !isNaN(rut);
    if(rut > 500000000){
        $val = {
            'error' : true,
            'message' : 'El rut debe ser de persona natural'
        };
    }
   
    return $val;
}