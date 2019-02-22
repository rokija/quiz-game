import BootcampAPI from "../../helpers/BootcampAPI";

import {
  API,
  NEXT_QUESTION_SUCCESS,
  NEXT_QUESTION_ERROR,
  GET_QUESTIONS_ERROR,
  GET_QUESTIONS_SUCCESS
} from "../../constants";

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

const nextQuestionSuccess = () => {
  return {
    type: NEXT_QUESTION_SUCCESS,
    isSelected: true
  };
};

const nextQuestionError = () => {
  return {
    type: NEXT_QUESTION_ERROR,
    isSelected: false
  };
};

/* Define action creaters here */
// question indexes are defined by .map

export const nextQuestion = () => {
  return dispatch => {
    return BootcampAPI.post(API.NEXT_QUESTION_SUCCESS, {})
      .then(() => dispatch(nextQuestionSuccess()))
      .catch(() => dispatch(nextQuestionError()));
  };
};

export const correctAnswer = correctanswers => {
  return dispatch => {};
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
