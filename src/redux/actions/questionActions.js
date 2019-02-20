import BootcampAPI from "../../helpers/BootcampAPI";

import {
    API,
    NEXT_QUESTION_SUCCESS,
    NEXT_QUESTION_ERROR,
    GET_QUESTIONS_ERROR,
    GET_QUESTIONS_SUCCESS

} from "../../constants";

/* Define actions here */

const getQuestionsSuccess = () => {
    return{
        type: GET_QUESTIONS_SUCCESS,
        data: [{"id":"1",
                "question":"Question 1",
                "answers":["1.answer", "2.answer", "3.answer", "4.answer"],
                "type":"input"},
                {"id":"2",
                "question":"Question 2",
                "answers":["1.answer", "2.answer", "3.answer", "4.answer"],
                "type":"input"},
                {"id":"3",
                "question":"Question 3",
                "answers":["1.answer", "2.answer", "3.answer", "4.answer"],
                "type":"input"}]
    };
}

const getQuestionsError = () => {
    return{
        type: GET_QUESTIONS_ERROR
    }
}

const nextQuestionSuccess = () => {
    return {
      type: NEXT_QUESTION_SUCCESS,
      isSelected: true
    };
  };

const nextQuestionError  = () => {
    return{
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
// correct answers value from database
export const correctAnswer = (correctanswers) => {
    return dispatch => {

    }
}

export const getQuestions = () => {
    return dispatch => {
      return BootcampAPI.get(API.GET_QUESTIONS)
      .then(res => dispatch(getQuestionsSuccess(res)))
      .catch(() => dispatch(getQuestionsError()));
    };
  };
  