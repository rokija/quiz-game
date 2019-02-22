import {
    API,
    GET_RESULTS_SUCCESS,
    GET_RESULTS_ERROR,
    GET_MYQUIZZES_SUCCESS,
    GET_MYQUIZZES_ERROR,
    GET_QUIZZES_SUCCESS,
    GET_QUIZZES_ERROR

} from "../../constants";

const defaultState = {
    results: null,
    quizzes: null
};
export const getResultsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_RESULTS_SUCCESS:
            return { ...state, results: action.payload };
        case GET_QUIZZES_SUCCESS:
            return { ...state, quizzes: action.payload };
        case GET_MYQUIZZES_SUCCESS:
            return { ...state, myquizzes: action.payload };
        case GET_QUIZZES_ERROR:
        case GET_MYQUIZZES_ERROR:
        case GET_RESULTS_ERROR:
            return state;
        default:
            return state;
    }
}

export default getResultsReducer;