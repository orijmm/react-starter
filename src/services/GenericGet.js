import axios from 'axios';
import { headersHttp, SYSTEM_ERROR } from "../config";

export const genericGet = (url) => {

    return new Promise((resolve, reject) => {
        try {
            axios
                .get( url, headersHttp)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    //console.log("estoy en el error 2", err);
                    reject("Error in genericGet axios!");
                });
        } catch (error) {
            //console.log("estoy en el error 1", error);
            reject(SYSTEM_ERROR);
        }
    });
};