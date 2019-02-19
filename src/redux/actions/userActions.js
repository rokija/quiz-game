import CryptoJS from "crypto-js";
import Bootcamp API from "../../helpers/BootcampAPI";
import {
    API,
    LOGIN_ERROR,
    LOGIN_SUCCESS,

} from "../../constants";

/* Define actions here */

const loginSuccess = token => {
    return {
        type: LOGIN_SUCCESS,
        token
    };
};

const loginerror = () => {
    return {
        type: LOGIN_ERROR
    };
};

/* Define action creaters here */

export const login = (email, password) => {
    return dispatch => {
        return BootcampAPI.post(API.LOGIN, {
            email: email,
            hashedPassword: CryptoJS.SHA256(password).toString()
        })
            .then(res => {
                const token = res.data.payload.token;

                localStorage.setItem("jwtToken", token);
                dispatch(loginSuccess(token));
            })
            .catch(() => dispatch(loginError()));
    };
};