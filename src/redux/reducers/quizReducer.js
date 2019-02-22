import {
  GET_QUIZZES_SUCCESS,
  GET_QUIZZES_ERROR,
  SUBMIT_QUIZ_SUCCESS,
  SUBMIT_QUIZ_ERROR,
  QUIZ_FILLED_ERROR,
  QUIZ_FILLED_SUCCESS
} from "../../constants/index";

const defaultState = {
  quizes: null
};

// If question is selected set flag to true so we can
// press next button and make our way to the next question
export const getQuizesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_QUIZZES_SUCCESS:
      return { ...state, quiz: action.payload };
    case GET_QUIZZES_ERROR:
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
};
