import { combineReducers } from "redux";
import {
  getQuestionsReducer,
  nextQuestionReducer
} from "./reducers/questionReducer";
import { QuizesReducer } from "./reducers/quizReducer";
import { registerReducer } from "./reducers/userReducer"
import { loginReducer, getUsersReducer } from "./reducers/userReducer";
import { getResultsReducer } from "./resultsReducer/resultsReducer";
import { getQuizesReducer } from "./reducers/quizReducer";

const rootReducer = combineReducers({
  getQuestionsReducer,
  nextQuestionReducer,
  loginReducer,
  getUsersReducer,
  QuizesReducer,
  registerReducer,
  getQuizesReducer,
  getResultsReducer
  
});

export default rootReducer;
