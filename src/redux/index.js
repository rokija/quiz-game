import { combineReducers } from "redux";
import { getResultsReducer } from "./resultsReducer/resultsReducer";
import { questionsReducer } from "./reducers/questionReducer";
import { registerReducer } from "./reducers/userReducer";
import { loginReducer, getUsersReducer } from "./reducers/userReducer";
import { quizesReducer } from "./reducers/quizReducer";

const rootReducer = combineReducers({
  getResultsReducer,
  loginReducer,
  getUsersReducer,
  registerReducer,
  questionsReducer,
  quizesReducer
});

export default rootReducer;
