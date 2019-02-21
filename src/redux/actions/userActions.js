import CryptoJS from "crypto-js";
import BootcampAPI from "../../helpers/BootcampAPI";
import {
    API,
    REGISTER_SUCCESS,
    REGISTER_ERROR,

} from "../../constants";

/* ------ actions ------- */

const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS
    };
};

const registerError = () => {
    return {
        type: REGISTER_ERROR
    };
};




/* ---- action creators ----- */

export const register = (user) => {
    const { email, username, password, name, surname, dateOfBirth, message } = user
    return dispatch => {
        return BootcampAPI.post(API.REGISTER, {
            email: email,
            username: username,
            name: name,
            surname: surname,
            dateOfBirth: dateOfBirth,
            message: message,
            hashedPassword: CryptoJS.SHA256(password).toString()
        })
            .then(() => dispatch(registerSuccess()))
            .catch(() => dispatch(registerError()));
    };
};

export const getUsers = () => {
    return dispatch => {
        return [{
            username: "Sunny",
            name: "SanoR",
            surname: "MarkO",
            email: "sm@sanor.com",
            dateOfBirth: "01/02/1995",
            level: "admin",
        }]
    }
}
