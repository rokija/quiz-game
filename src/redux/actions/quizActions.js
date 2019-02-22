import BootcampAPI from "../../helpers/BootcampAPI";
import { API, GET_QUIZZES_ERROR, GET_QUIZZES_SUCCESS } from "../../constants";

/* Define actions here */

const getQuizzesSuccess = res => {
  console.log(res);
  return {
    type: GET_QUIZZES_SUCCESS
  };
};

const getQuizzesError = () => {
  return {
    type: GET_QUIZZES_ERROR
  };
};
export const getQuizzes = () => {
  return dispatch => {
    return BootcampAPI.get(API.GET_QUIZZES)
      .then(res => dispatch(getQuizzesSuccess(res)))
      .catch(() => dispatch(getQuizzesError()));
  };
};

// When API is connected uncomment
// export const submitQuizz = (title, description) => {
//     return dispatch => { 
//         return console.log('Submit?');
//     }
// }