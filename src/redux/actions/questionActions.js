import BootcampAPI from "../../helpers/BootcampAPI";

import {
  API,
  NEXT_QUESTION_SUCCESS,
  NEXT_QUESTION_ERROR,
  GET_QUESTIONS_ERROR,
  GET_QUESTIONS_SUCCESS,
  POST_QUESTION_ERROR,
  POST_QUESTION_SUCCESS,
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

const postQuestionError = (res) => {
  console.log(res)
  return {
    type: POST_QUESTION_ERROR,
    payload: 'data'
  };
};

const postQuestionSuccess = () => {
  return {
    type: POST_QUESTION_SUCCESS,
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

export const postQuestion = (question) => {
  return dispatch => {
    return BootcampAPI.post(API.POST_QUESTION, question)
      .then(res => {
        dispatch(postQuestionSuccess(res))
      })
      .catch(() => dispatch(postQuestionError()))
  }
}

export const getQuestions = () => {
  return dispatch => {
    return BootcampAPI.get(API.GET_QUESTIONS)
      .then(res => {
        dispatch(getQuestionsSuccess(res));
      })
      .catch(() => dispatch(getQuestionsError()));
  };
};
