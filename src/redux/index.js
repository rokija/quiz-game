import { combineReducers } from "redux";
import {
    getQuestionsReducer,
    storeAnswersReducer
} from "./reducers/questionReducer";
import { getQuizesReducer } from "./reducers/quizReducer";

import { loginReducer, getUsersReducer } from "./reducers/userReducer";


/* Reducers to create for questions
getQuestionsReducer, nextQuestionReducer
*/
const rootReducer = combineReducers({
    getQuestionsReducer,
    storeAnswersReducer,
    loginReducer,
    getUsersReducer,
    getQuizesReducer
});

export default rootReducer;
