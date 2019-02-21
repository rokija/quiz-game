import { combineReducers } from "redux";
import { getQuestionsReducer, nextQuestionReducer } from "./reducers/questionReducer"
import { getQuizesReducer } from "./reducers/quizReducer";
 
const rootReducer = combineReducers({
    getQuestionsReducer: getQuestionsReducer,
    nextQuestionReducer: nextQuestionReducer,
    getQuizesReducer: getQuizesReducer,
});

export default rootReducer;