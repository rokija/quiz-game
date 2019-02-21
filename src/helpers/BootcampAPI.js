import axios from "axios";
import dotenv from 'dotenv'

dotenv.config()

class APIClass {
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://quiz-game-api.herokuapp.com/api/v1/',
            timeout: 1000
        });
    }

    getDefaultHeaders() {
        return {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            responseType: "application/json"
        };
    }

    get(url) {
        return this.instance.get(url, {
            headers: this.getDefaultHeaders()
        });
    }

    post(url, data) {
        return this.call("post", url, data);
    }

    call(method, url, data) {
        return this.instance[method](url, data, {
            method,
            headers: this.getDefaultHeaders()
        });
    }
}

const API = new APIClass();

export default API;