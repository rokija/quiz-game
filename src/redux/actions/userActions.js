import CryptoJS from "crypto-js";
import BootcampAPI from "../../helpers/BootcampAPI";
import { API, LOGIN_ERROR, LOGIN_SUCCESS } from "../../constants";

const loginSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    token
  };
};

const loginError = () => {
  return {
    type: LOGIN_ERROR
  };
};

export const login = (username, password) => {
  return dispatch => {
    return BootcampAPI.post(API.LOGIN, {
      username: username,
      hashedPassword: CryptoJS.SHA256(password).toString()
    })
      .then(res => {
        const token = res.data.payload.token;

        localStorage.setItem("jwtToken", token);
        dispatch(loginSuccess(token));
      })
      .catch(e => {
        dispatch(loginError());
        throw e;
      });
  };
};
