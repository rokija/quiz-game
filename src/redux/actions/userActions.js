//import CryptoJS from "crypto-js";
import BootcampAPI from "../../helpers/BootcampAPI";
import {
  API,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from "../../constants";

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

const getUsersSuccess = res => {
  return {
    type: GET_USERS_SUCCESS,
    payload: res.data.payload
  };
};

const getUsersError = () => {
  return {
    type: GET_USERS_ERROR
  };
};

export const login = (username, password) => {
  return dispatch => {
    return BootcampAPI.post(API.LOGIN, {
      username: username,
      hashedPassword: password.toString() //CryptoJS.SHA256(password).toString()
    })
      .then(res => {
        const token = res.data.payload.token;

        localStorage.setItem("jwtToken", token);
        dispatch(loginSuccess(token));
      })
      .catch(e => {
        console.error("ERRROROR", e);
        dispatch(loginError());
        throw e;
      });
  };
};

export const getUsers = () => {
  return dispatch => {
    return BootcampAPI.get(API.GET_USERS)
      .then(res => {
        dispatch(getUsersSuccess(res));
      })
      .catch(err => {
        dispatch(getUsersError());
      });
  };
};
