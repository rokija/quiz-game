import { combineReducers } from "redux";
import { questionsReducer } from "./reducers/questionReducer";
import { registerReducer } from "./reducers/userReducer"
import { loginReducer, getUsersReducer } from "./reducers/userReducer";
import { getResultsReducer } from "./resultsReducer/resultsReducer";
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
