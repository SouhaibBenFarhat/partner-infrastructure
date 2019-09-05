import axios from 'axios';

const HOST = 'http://localhost:3000/';
const CONTENT_TYPE = {json: 'application/json', multipart: 'multipart/form-data'};

const errorMessage = {
    status: 500,
    data: {
        error: 'Connection failed'
    }
};

export default class Api {

    static headers(contentType = 'json') {
        return {
            headers: {
                'Content-Type': CONTENT_TYPE[contentType],
                'Access-Control-Allow-Origin': '*'
            }
        };
    }

    static get(route) {
        let url = `${HOST}${route}`;
        return Api.getRequest(url);
    }


    static getRequest(url) {
        return axios.get(url, this.headers()).then((response) => {
            return Api.returnWithFallback(response)
        }).catch((error) => {
            return Api.returnWithFallback(error.response);
        });
    }

    static returnWithFallback(res) {
        return res ? res : errorMessage
    }
}