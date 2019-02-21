import { combineReducers } from "redux";
import {getQuestionsReducer, nextQuestionReducer} from "./questionReducer/questionReducer"
import {getQuizzReducer } from "./";
/* Reducers to create for questions
getQuestionsReducer, nextQuestionReducer
*/
const rootReducer = combineReducers({
    getQuestionsReducer: getQuestionsReducer,
    nextQuestionReducer: nextQuestionReducer

});

export default rootReducer;