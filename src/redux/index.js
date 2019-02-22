import { combineReducers } from "redux";
import {
  getQuestionsReducer,
  nextQuestionReducer
} from "./reducers/questionReducer";
import { getQuizesReducer } from "./reducers/quizReducer";
import { registerReducer } from "./reducers/userReducer"
import { loginReducer, getUsersReducer } from "./reducers/userReducer";

/* Reducers to create for questions
getQuestionsReducer, nextQuestionReducer
*/
const rootReducer = combineReducers({
  getQuestionsReducer: getQuestionsReducer,
  nextQuestionReducer: nextQuestionReducer,
  loginReducer: loginReducer,
  getUsersReducer: getUsersReducer,
  registerReducer: registerReducer,
  getQuizesReducer: getQuizesReducer
});

export default rootReducer;
