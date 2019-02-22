import { combineReducers } from "redux";
import { getQuestionsReducer, storeAnswersReducer } from "./reducers/questionReducer"
import { loginReducer } from "./reducers/userReducer";


/* Reducers to create for questions
getQuestionsReducer, nextQuestionReducer
*/
const rootReducer = combineReducers({
    getQuestionsReducer: getQuestionsReducer,
    storeAnswersReducer: storeAnswersReducer,
    loginReducer: loginReducer
});

export default rootReducer;
