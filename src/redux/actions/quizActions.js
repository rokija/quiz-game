import BootcampAPI from "../../helpers/BootcampAPI";
import {
  API,
  GET_QUIZZES_ERROR,
  GET_QUIZZES_SUCCESS,
  POST_QUIZ_SUCCESS,
  POST_QUIZ_ERROR
} from "../../constants";

/* Define actions here */

const getQuizzesSuccess = res => {
  return {
    type: GET_QUIZZES_SUCCESS,
    payload: res.data.payload
  };
};

const getQuizzesError = () => {
  return {
    type: GET_QUIZZES_ERROR
  };
};

const postQuizSuccess = res => {
  return {
    type: POST_QUIZ_SUCCESS,
    payload: res.data.payload
  };
};

const postQuizError = () => {
  return {
    type: POST_QUIZ_ERROR
  };
};

export const getQuizzes = () => {
  return dispatch => {
    return BootcampAPI.get(API.QUIZZES)
      .then(res => {
        dispatch(getQuizzesSuccess(res));
      })
      .catch(() => {
        dispatch(getQuizzesError());
      });
  };
};

export const submitQuizz = (name, description) => {
  return dispatch => {
    return BootcampAPI.post(API.QUIZZES, {
      name,
      description
    })
      .then(res => dispatch(postQuizSuccess(res)))
      .catch(err => {
        console.error(err);
        dispatch(postQuizError());
        throw err;
      });
  };
};
