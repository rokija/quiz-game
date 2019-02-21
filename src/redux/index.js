import { combineReducers } from "redux";
import { getQuestionsReducer, nextQuestionReducer } from "./reducers/questionReducer"
import { getQuizzesReducer } from "./reducers/quizReducer";
import { loginReducer } from "./reducers/userReducer";
 
const rootReducer = combineReducers({
    getQuestionsReducer,
    nextQuestionReducer,
    getQuizzesReducer,
    loginReducer
});

export default rootReducer;
