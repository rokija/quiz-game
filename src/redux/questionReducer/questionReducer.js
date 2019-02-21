import {
    NEXT_QUESTION_ERROR,
    NEXT_QUESTION_SUCCESS,
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_ERROR
} from "../../constants";

const defaultState = {
    isSelected: false,
    questions: [{
        "questionId": "1",
        "question": "Question 1",
        "answers": ["1.answer", "2.answer", "3.answer", "4.answer"],
        "type": "input"
    },
    {
        "questionId": "2",
        "question": "Question 2",
        "answers": ["1.answer", "2.answer", "3.answer", "4.answer"],
        "type": "input"
    },
    {
        "questionId": "3",
        "question": "Question 3",
        "answers": ["1.answer", "2.answer", "3.answer", "4.answer"],
        "type": "input"
    }]
};

// If question is selected set flag to true so we can
// press next button and make our way to the next question
export const nextQuestionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case NEXT_QUESTION_SUCCESS:
            return { ...state, isSelected: true };
        case NEXT_QUESTION_ERROR:
            return { ...state, isSelected: false };
        default:
            return state;
    }
};


export const getQuestionsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_QUESTIONS_SUCCESS:
            console.log(action.data)
            return { ...state, questions: action.data };
        case GET_QUESTIONS_ERROR:
            return console.log('err');
        default:
            return state;
    }
}

