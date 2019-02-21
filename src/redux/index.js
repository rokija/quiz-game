import { combineReducers } from "redux";
import { getQuestionsReducer, storeAnswersReducer } from "./questionReducer/questionReducer"

/* Reducers to create for questions
getQuestionsReducer, nextQuestionReducer
*/
const rootReducer = combineReducers({
    getQuestionsReducer: getQuestionsReducer,
    storeAnswersReducer: storeAnswersReducer

});

export default rootReducer;