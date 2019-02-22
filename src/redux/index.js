import { combineReducers } from "redux";
import { getQuestionsReducer, nextQuestionReducer, questionReducer } from "./reducers/questionReducer"
import { getResultsReducer } from "./resultsReducer/resultsReducer"
import { getQuizesReducer } from "./reducers/quizReducer";
import { registerReducer } from "./reducers/userReducer"
import { loginReducer, getUsersReducer } from "./reducers/userReducer";




/* Reducers to create for questions
getQuestionsReducer, nextQuestionReducer
*/
const rootReducer = combineReducers({
    getResultsReducer,
    nextQuestionReducer,
    getQuestionsReducer,
    loginReducer,
    getUsersReducer,
    registerReducer,
    getQuizesReducer,
    questionReducer,
});

export default rootReducer;
