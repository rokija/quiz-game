import {
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR
} from "../../constants";

export const questionsReducer = (state = {
  questions: []
}, action) => {
    switch (action.type) {
        case GET_QUESTIONS_SUCCESS:
            return { ...state, questions: action.data };
        case GET_QUESTIONS_ERROR:
            return console.log('err');
        default:
            return state;
    }
}

