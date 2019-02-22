import {
    API,
    GET_RESULTS_SUCCESS,
    GET_RESULTS_ERROR,
    GET_MYQUIZZES_SUCCESS,
    GET_MYQUIZZES_ERROR,
    GET_QUIZZES_SUCCESS,
    GET_QUIZZES_ERROR,
    GET_RECORDS_SUCCESS,
    GET_RECORDS_ERROR,
    GET_RES_QUESTIONS_SUCCESS,
    GET_RES_QUESTIONS_ERROR

} from "../../constants";

const defaultState = {
    results: null,
    quizzes: null,
    records: null,
    questions: null
};
export const getResultsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_RESULTS_SUCCESS:
            return { ...state, results: action.payload };
        case GET_QUIZZES_SUCCESS:
            return { ...state, quizzes: action.payload };
        case GET_RES_QUESTIONS_SUCCESS:
            return { ...state, questions: action.payload };
        case GET_RECORDS_SUCCESS:
            return { ...state, records: action.payload };
        case GET_MYQUIZZES_SUCCESS:
            return { ...state, myquizzes: action.payload };
        case GET_QUIZZES_ERROR:
        case GET_RES_QUESTIONS_ERROR:
        case GET_RECORDS_ERROR:
        case GET_MYQUIZZES_ERROR:
        case GET_RESULTS_ERROR:
            return state;
        default:
            return state;
    }
}

export default getResultsReducer;