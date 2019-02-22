import { combineReducers } from "redux";
import {
  getQuestionsReducer,
  nextQuestionReducer
} from "./reducers/questionReducer";
import { QuizesReducer } from "./reducers/quizReducer";
import { registerReducer } from "./reducers/userReducer"
import { loginReducer, getUsersReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  getQuestionsReducer,
  nextQuestionReducer,
  loginReducer,
  getUsersReducer,
  QuizesReducer,
  registerReducer
  
});

export default rootReducer;
