import { combineReducers } from "redux";
import { getQuestionsReducer, nextQuestionReducer } from "./questionReducer/questionReducer"
import { registerReducer } from "./reducers/userReducer"

/* Reducers to create for questions
getQuestionsReducer, nextQuestionReducer
*/
const rootReducer = combineReducers({
    getQuestionsReducer: getQuestionsReducer,
    nextQuestionReducer: nextQuestionReducer,
    registerReducer: registerReducer,

});

export default rootReducer;