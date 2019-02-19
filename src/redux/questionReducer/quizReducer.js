import {
    GET_QUIZ_SUCCESS,
    GET_QUIZ_ERROR,
    SUBMIT_QUIZ_SUCCESS,
    SUBMIT_QUIZ_ERROR,
    QUIZ_FILLED_ERROR,
    QUIZ_FILLED_SUCCESS
} from "../../constants";

const defaultState = {
    quizes: null
};

// If question is selected set flag to true so we can
// press next button and make our way to the next question
export const getQuizesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_QUIZ_SUCCESS:
            return { ...state, quizes: action.payload.reverse() };
        case SUBMIT_QUIZ_SUCCESS:
            return { ...state, quizes: [action.payload, ...state.quizes] };
        case GET_QUIZ_ERROR:
        case SUBMIT_QUIZ_ERROR:
        default:
            return state;
    }
};

export const quizFilledReducer = (state = defaultState, action) => {
    switch (action.type) {
        case QUIZ_FILLED_SUCCESS:
            return { ...state, isQuizFilled: true };
        case QUIZ_FILLED_ERROR:
            return { ...state, isQuizFilled: false };
        default:
            return state;
    }
}
