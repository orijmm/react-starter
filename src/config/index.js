export const API_URL = process.env.REACT_APP_API_URL;
//Borrar luego de implementado el login
export const RUT_CLIENT = process.env.REACT_APP_RUT;
//Borrar luego de implementado el login
export const TOKEN_ACCESS = process.env.REACT_APP_TOKEN_ACCESS;

export const SYSTEM_ERROR = "Error de sistema";

export const headersHttp = {
    baseURL: API_URL,
    headers: {
        'kPLUSyn': localStorage.getItem('kPLUSyn') || RUT_CLIENT,
        Authorization: "Bearer " + (localStorage.getItem('leaezdMEQ') || TOKEN_ACCESS)
    }
}

export const multipartHeadersHttp = {
    baseURL: API_URL,
    headers: {
        'kPLUSyn': localStorage.getItem('kPLUSyn') || RUT_CLIENT,
        Authorization: "Bearer " + (localStorage.getItem('leaezdMEQ') || TOKEN_ACCESS),
        'Content-Type': 'multipart/form-data'
    }
}