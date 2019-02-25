import {
  STORE_ANSWERS_ERROR,
  STORE_ANSWERS_SUCCESS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,
  POST_QUESTION_SUCCESS,
  POST_QUESTION_ERROR
} from "../../constants";

const defaultState = {
  selectedAnswers: [],
  questions: []
};

// If question is selected set flag to true so we can
// press next button and make our way to the next question
export const storeAnswersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case STORE_ANSWERS_SUCCESS:
      return {
        ...state,
        selectedAnswers: [...state.selectedAnswers, action.selectedAnswers]
      };
    case STORE_ANSWERS_ERROR:
    default:
      return state;
  }
};

export const questionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_QUESTIONS_SUCCESS:
      return { ...state, questions: action.data };
    case GET_QUESTIONS_ERROR:
      return console.log("err");
    default:
      return state;
  }
};

export const postQuestionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case POST_QUESTION_SUCCESS:
      return { ...state, questions: action.payload };
    case POST_QUESTION_ERROR:
    default:
      return state;
  }
};
