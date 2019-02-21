import BootcampAPI from "../../helpers/BootcampAPI";
import {
    API,
    GET_QUESTIONS_ERROR,
    GET_QUESTIONS_SUCCESS

} from "../../constants";

/* Define actions here */

const getQuestionsSuccess = () => {
    GET_QUESTIONs_SUCCESS
}

const getQuestionsError = () => {
    GET_QUESTIONs_ERROR
}

/* Define action creaters here */
// question indexes are defined by .map 
export const getQuestions = () => {
    return dispatch => {
        return BootcampAPI.get(API.GET_QUESTIONS)
            .then(res => dispatch(getQuestionsSuccess(res)))
            .catch(() => dispatch(getQuestionsError()));
    };
};
