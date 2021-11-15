
import React, { useState } from "react";
import { useEffect } from "react";

const SimpleInput = ({ inputData = "", customClass, onChangeValue, onBlurExternal = () => { }, minLength = null, maxLength = null }) => {

    const [errorStatus, setErrorStatus] = useState(false);
    const [message, setMessage] = useState("");

    const handleValidate = () => {
        setErrorStatus(false);
        if (inputData.required && !!!inputData?.value.trim() && !inputData.valid && inputData.errorMessage) {
            setErrorStatus(true);
            setMessage(inputData.errorMessage);
        }
    }

    const handleOnBlur = () => {

        onBlurExternal()

        setErrorStatus(false);
        if (inputData.required && !!!inputData?.value.trim() && inputData.warningMessage) {
            setErrorStatus(true);
            setMessage(inputData.warningMessage);
        }
    }

    const errorLabel = errorStatus ? <label className="error-message">{message}</label> : null;

    useEffect(() => {

        handleValidate()

    }, [inputData]);

    return (
        <>
            <input
                value={inputData.value}
                type={inputData.type}
                minLength={minLength}
                maxLength={maxLength}
                autoComplete="nope"
                className={customClass}
                onChange={(valor) => {
                    onChangeValue(valor)
                }}
                onBlur={handleOnBlur}
                required
            ></input>
            {errorLabel}
        </>
    );
};

export default SimpleInput;