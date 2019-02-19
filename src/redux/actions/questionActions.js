import CryptoJS from "crypto-js";
import Bootcamp API from "../../helpers/BootcampAPI";
import {
    API,
    NEXT_QUESTION_SUCCESS,
    NEXT_QUESTION_FAILED,
    SHOW_CORRECT_ANSWER_FAILED,
    SHOW_CORRECT_ANSWER_SUCESS

} from "../../constants";

/* Define actions here */

const nextQuestionSucces = () => {
    type: NEXT_QUESTION_SUCCESS
}

const nextQuestionFailed = () => {
    type: NEXT_QUESTION_FAILED
}

const onShowCorrectAnswer = () => {
    type: SHOW_CORRECT_ANSWER_SUCESS
}

const onShowCorrectAnswer = () => {
    type: SHOW_CORRECT_ANSWER_FAILED
}


/* Define action creaters here */
// question indexes are defined by .map 
export const nextQuestion = (questionindex) => {
    return dispatch => {

    }
}
// correct answers value from database
export const correctAnswer = (correctanswers) => {
    return dispatch => {

    }
}

export const login = (email, password) => {
    return dispatch => {
        return BootcampAPI.post(API.LOGIN, {
            email: email,
            hashedPassword: CryptoJS.SHA256(password).toString()
        })
            .then(res => {
                const token = res.data.payload.token;

                localStorage.setItem("jwtToken", token);
                dispatch(loginSuccess(token));
            })
            .catch(() => dispatch(loginError()));
    };
};