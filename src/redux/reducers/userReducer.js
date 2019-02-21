import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR
} from "../../constants";

const defaultState = {
    isRegistered: false,
    users: null
};

const userDefaultState = {
    users: [],
    self: {}
}

export const registerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state, isRegistered: true };
        case REGISTER_ERROR:
            return { ...state, isRegistered: false };
        default:
            return state;
    }
};

export const userReducer = (state = userDefaultState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
        case GET_USERS_ERROR:
        default:
            return state;
    }
}