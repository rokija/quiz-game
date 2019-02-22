import {
  API,
  STORE_ANSWERS_SUCCESS,
  //STORE_ANSWERS_ERROR,
  GET_QUESTIONS_ERROR,
  GET_QUESTIONS_SUCCESS
} from "../../constants";
import BootcampAPI from "../../helpers/BootcampAPI"
/* Define actions here */

const getQuestionsSuccess = res => {
  return {
    type: GET_QUESTIONS_SUCCESS,
    payload: res.data.payload
  };
};

const getQuestionsError = () => {
  return {
    type: GET_QUESTIONS_ERROR
  };
};

const storeAnswersSuccess = (selectedAnswers) => {
  return {
    type: STORE_ANSWERS_SUCCESS,
    selectedAnswers
  };
};

/*const storeAnswersError = () => {
  return {
    type: STORE_ANSWERS_ERROR,
    isSelected: false
  };
};*/

/* Define action creaters here */
// question indexes are defined by .map

export const storeAnswers = (selectedAnswers) => {
  return dispatch => {
    return dispatch(storeAnswersSuccess(selectedAnswers))
  };
};

export const correctAnswer = correctanswers => {
  return dispatch => { };
};

export const getQuestions = () => {
  return dispatch => {
    return BootcampAPI.get(API.GET_QUESTIONS)
      .then(res => {
        dispatch(getQuestionsSuccess(res));
      })
      .catch(() => dispatch(getQuestionsError()));
  };
};
