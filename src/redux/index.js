import { combineReducers } from "redux";
import { getQuestionsReducer, nextQuestionReducer } from "./questionReducer/questionReducer"
import { getResultsReducer } from "./resultsReducer/resultsReducer"
import {
  getQuestionsReducer,
  nextQuestionReducer
} from "./reducers/questionReducer";

import { loginReducer } from "./reducers/userReducer";

/* Reducers to create for questions
getQuestionsReducer, nextQuestionReducer
*/
const rootReducer = combineReducers({
  getQuestionsReducer: getQuestionsReducer,
  nextQuestionReducer: nextQuestionReducer,
  getResultsReducer: getResultsReducer,


  getQuestionsReducer: getQuestionsReducer,
  nextQuestionReducer: nextQuestionReducer,
  loginReducer: loginReducer
});

export default rootReducer;
