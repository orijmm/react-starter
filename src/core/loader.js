import React from "react";

/* Componentes */ 
import Preloader                 from "@components/preloader";

const Components = {
    "preloader":                Preloader,
};

export default data => {
    
    if ( typeof Components[data.name] !== "undefined" )
    {
        return React.createElement( Components[data.name], data);
    }
}