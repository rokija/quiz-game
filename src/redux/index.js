import { combineReducers } from "redux";
import { getQuestionsReducer, nextQuestionReducer } from "./reducers/questionReducer"
import { getQuizzesReducer } from "./reducers/quizReducer";
 
const rootReducer = combineReducers({
    getQuestionsReducer,
    nextQuestionReducer,
    getQuizzesReducer,
});

export default rootReducer;