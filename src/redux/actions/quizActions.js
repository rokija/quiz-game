import BootcampAPI from "../../helpers/BootcampAPI";
import {
    API,
    GET_QUESTIONS_ERROR,
    GET_QUESTIONS_SUCCESS,
    GET_QUIZ_SUCCESS,
    GET_QUIZ_ERROR,

} from "../../constants";

/* Define actions here */

const getQuestionsSuccess = () => {
    return {
        type: GET_QUESTIONS_SUCCESS,
    }

}

const getQuestionsError = () => {
    return {
        type: GET_QUESTIONS_ERROR,
    }

}
const getQuizSuccess = () => {
    return {
        type: GET_QUIZ_SUCCESS,
        data: [
            {
                title: "First Quiz",
                description: "Description about quiz",
                isAdmin: false,
                id: 0,
            },
            {
                title: "Second Quiz",
                description: "Description about quiz",
                isAdmin: true,
                id: 1,
            },
            {
                title: "Third Quiz",
                description: "Description about quiz",
                isAdmin: false,
                id: 2,
            },
            {
                title: "Fourth Quiz",
                description: "Description about quiz",
                isAdmin: true,
                id: 3,
            },
            {
                title: "Fifth Quiz",
                description: "Description about quiz",
                isAdmin: false
            }]
    }
}
// When API is connected uncomment
// const getQuizError=()=>{
//     GET_QUIZ_ERROR
// }
/* Define action creaters here */
// question indexes are defined by .map 
export const getQuestions = () => {
    return dispatch => {
        return BootcampAPI.get(API.GET_QUESTIONS)
            .then(res => dispatch(getQuestionsSuccess(res)))
            .catch(() => dispatch(getQuestionsError()));
    };
};
export const getQuiz = () => {
    return dispatch => {
        return dispatch(getQuizSuccess());

    };
};
// When API is connected uncomment
// export const submitQuizz = (title, description) => {
//     return dispatch => { 
//         return console.log('Submit?');
//     }
// }