import {
  GET_QUIZZES_SUCCESS,
  GET_QUIZZES_ERROR,
  POST_QUIZ_ERROR,
  POST_QUIZ_SUCCESS
} from "../../constants/index";

const defaultState = {
  quizes: null
};

// If question is selected set flag to true so we can
// press next button and make our way to the next question
export const QuizesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_QUIZZES_SUCCESS:
      return { ...state, quizes: action.payload.reverse() };
    case POST_QUIZ_SUCCESS:
      return { ...state, quizes: [action.payload, ...state.quizes] };
    case GET_QUIZZES_ERROR:
    case POST_QUIZ_ERROR:
    default:
      return state;
  }
};