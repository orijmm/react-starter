import React from 'react'
import SelectSearch, { fuzzySearch } from "react-select-search";

function SelectSearchOption({ option, handleChange, handleClick, defaultValue = '', onBlurValid , placeHolderTxt = false, color=false, disabled=false }) {

    let text = placeHolderTxt !== false ? placeHolderTxt : "Selecciona";
    
    return (
        <SelectSearch
            value={(!color)?defaultValue:null}
            options={ (typeof option === "undefined") ? [] : option }
            search
            filterOptions={(options) => {
                const filter = fuzzySearch(options);
                return (q) => filter(q);
            }}
            placeholder={text}
            emptyMessage="No encontrado"
            closeOnSelect={true}
            onChange={(value, element) => {
                handleChange(element)}
            }
            onClick={handleClick}
            onBlur={onBlurValid}
            disabled={disabled}
            // printOptions="always"
         
        />
    );
}

export default SelectSearchOption;
