import { LOGIN_ERROR, LOGIN_SUCCESS } from "../../constants";

const defaultState = {
  isLoggedIn: false
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    case LOGIN_ERROR:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
