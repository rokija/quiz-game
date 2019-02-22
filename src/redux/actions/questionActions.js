import {
  API,
  STORE_ANSWERS_SUCCESS,
  //STORE_ANSWERS_ERROR,
  GET_QUESTIONS_ERROR,
  GET_QUESTIONS_SUCCESS,
  POST_QUESTION_ERROR,
  POST_QUESTION_SUCCESS,
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

export const storeAnswers = (selectedAnswers) => {
  return dispatch => {
    return dispatch(storeAnswersSuccess(selectedAnswers))
  };
};

export const correctAnswer = correctanswers => {
  return dispatch => { };
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
