import {
  STORE_ANSWERS_SUCCESS,
  //STORE_ANSWERS_ERROR,
  //GET_QUESTIONS_ERROR,
  GET_QUESTIONS_SUCCESS,

} from "../../constants";

/* Define actions here */

const getQuestionsSuccess = () => {
  return {
    type: GET_QUESTIONS_SUCCESS,
    data: [{
      "id": "1",
      "question": "Question 1",
      "answers": ["1.answer", "2.answer", "3.answer", "4.answer"],
      "type": "input"
    },
    {
      "id": "2",
      "question": "Question 2",
      "answers": ["1.answer", "2.answer", "3.answer", "4.answer"],
      "type": "input"
    },
    {
      "id": "3",
      "question": "Question 3",
      "answers": ["1.answer", "2.answer", "3.answer", "4.answer"],
      "type": "input"
    }]
  };
}

//const getQuestionsError = () => {
//  return {
//    type: GET_QUESTIONS_ERROR
//  }
//}

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


export const getQuestions = () => {
  return dispatch => {
    return dispatch(getQuestionsSuccess())
  };
};
