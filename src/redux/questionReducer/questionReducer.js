import {
    QUIZ_FILLED_ERROR,
    QUIZ_FILLED_SUCCESS,
    NEXT_QUESTION_FAILED,
    NEXT_QUESTION_SUCCESSFUL,
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_ERROR
} from "../../constants";

const defaultState = {
    isSelected: false,
    questions: null,
};

// If question is selected set flag to true so we can
// press next button and make our way to the next question
export const nextQuestionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case NEXT_QUESTION_SUCCESSFUL:
            return { ...state, isSelected: true };
        case NEXT_QUESTION_FAILED:
            return { ...state, isSelected: false };
        default:
            return state;
    }
};


export const getQuestionsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_QUESTIONS_SUCCESS:
            return { ...state, questions: action.payload };
        case GET_QUESTIONS_ERROR:
        default:
            return state;
    }
}

