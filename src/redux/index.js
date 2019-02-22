import { combineReducers } from "redux";
import { getQuestionsReducer, nextQuestionReducer } from "./reducers/questionReducer"
import { getResultsReducer } from "./reducers/resultsReducer"
import { getQuizesReducer } from "./reducers/quizReducer";
import { questionsReducer } from "./reducers/questionReducer";
import { registerReducer } from "./reducers/userReducer"
import { loginReducer, getUsersReducer } from "./reducers/userReducer";
import { quizesReducer } from "./reducers/quizReducer";

const rootReducer = combineReducers({
  loginReducer,
  questionsReducer,
  getUsersReducer,
  quizesReducer,
  registerReducer,
  getResultsReducer
});

export default rootReducer;
