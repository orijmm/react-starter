import axios from 'axios';
import { headersHttp, SYSTEM_ERROR } from "../config";

export const genericPost = (url, body) => {
    return new Promise((resolve, reject) => {
        try {
            axios
                .post( url, body, headersHttp)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject("Error in genericPost axios!");
                });
        } catch (error) {
            reject(SYSTEM_ERROR);
        }
    });
};