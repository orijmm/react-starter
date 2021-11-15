import React from 'react';
import {Form} from "react-bootstrap";

function Radio({textLabel, value, onClick, checkedValues}) {
    function handleChange(value) {
        onClick(value);   
    }
    
    return (
        <Form.Check
            onClick={(e) => handleChange(e.target.value)}
            className="radio radio-btn"
            defaultChecked={checkedValues}
            type="radio"
            label={textLabel}
            name="radio"
            value={value}
        />
    )
}

export default Radio
