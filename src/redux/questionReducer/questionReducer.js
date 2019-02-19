import {
    QUIZ_FILLED_ERROR,
    QUIZ_FILLED_SUCCESS,
    NEXT_QUESTION_FAILED,
    NEXT_QUESTION_SUCCESSFUL,
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_ERROR
} from "../../constants";

const defaultState = {
    isQuestionSelected: false,
    isQuizFilled: false,
};

// If question is selected set flag to true so we can
// press next button and make our way to the next question
export const nextQuestionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case NEXT_QUESTION_SUCCESSFUL:
            return { ...state, isQuestionSelected: true };
        case NEXT_QUESTION_FAILED:
            return { ...state, isQuestionSelected: false };
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

export const getQuestionsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_QUESTIONS_SUCCESS:
            return { ...state, isQuizFilled: true };
        case GET_QUESTIONS_ERROR:
            return { ...state, isQuizFilled: false };
        default:
            return state;
    }
}
