import { combineReducers } from "redux";
import {
  getQuestionsReducer,
  nextQuestionReducer
} from "./reducers/questionReducer";
import { QuizesReducer } from "./reducers/quizReducer";

import { loginReducer, getUsersReducer } from "./reducers/userReducer";

/* Reducers to create for questions
getQuestionsReducer, nextQuestionReducer
*/
const rootReducer = combineReducers({
  getQuestionsReducer,
  nextQuestionReducer,
  loginReducer,
  getUsersReducer,
  QuizesReducer
});

export default rootReducer;
