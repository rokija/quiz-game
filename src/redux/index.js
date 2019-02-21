import { combineReducers } from "redux";
import { getQuestionsReducer, nextQuestionReducer } from "./questionReducer/questionReducer"
import { getResultsReducer } from "./resultsReducer/resultsReducer"

/* Reducers to create for questions
getQuestionsReducer, nextQuestionReducer
*/
const rootReducer = combineReducers({
    getQuestionsReducer: getQuestionsReducer,
    nextQuestionReducer: nextQuestionReducer,
    getResultsReducer: getResultsReducer,


});

export default rootReducer;