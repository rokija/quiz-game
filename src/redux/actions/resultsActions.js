import BootcampAPI from "../../helpers/BootcampAPI";
import {
    API,
    GET_RESULTS_SUCCESS,
    GET_RESULTS_ERROR,
    GET_RECORDS_SUCCESS,
    GET_RECORDS_ERROR,
    GET_QUIZZES_SUCCESS,
    GET_QUIZZES_ERROR,
    GET_MYQUIZZES_SUCCESS,
    GET_MYQUIZZES_ERROR,
    GET_RES_QUESTIONS_SUCCESS,
    GET_RES_QUESTIONS_ERROR
} from "../../constants";

const results = [
    {
        "id": "string",
        "recordIds": [
            "string"
        ],
        "userId": "user1",
        "quizId": "1"
    },
    {
        "id": "string",
        "recordIds": [
            "string"
        ],
        "userId": "user1",
        "quizId": "2"
    },
    {
        "id": "string",
        "recordIds": [
            "string"
        ],
        "userId": "uesr1",
        "quizId": "3"
    },
    {
        "id": "string",
        "recordIds": [
            "string"
        ],
        "userId": "user1",
        "quizId": "4"
    }
]
const myquizzes = [
    {
        "id": "1",
        "description": "Description of quiz",
        "ownerId": "string",
        "name": "1.quiz",
        "questions": [
            "string"
        ]
    },
    {
        "id": "2",
        "description": "Description of quiz",
        "ownerId": "string",
        "name": "2.quiz",
        "questions": [
            "string"
        ]
    },
]
const Questions = [
    {
        question: "What is your name?",
        type: "text",
        answers: [],
        correct: ["John"],
        userAnswers: ["John"]
    },
    {
        question: "What is group leader's name?",
        type: "radio",
        answers: ["Liza", "Kitija", "John", "Janis"],
        correct: ["Janis"],
        userAnswers: ["Liza"]
    },
    {
        question: "Which tools we did discussed?",
        type: "checkbox",
        answers: ["react", "github", "angular", "no one"],
        correct: ["react", "github"],
        userAnswers: ["github"]
    }
]

const records = [
    {
        id: "1",
        questionId: "1",
        answers: ["0"]
    },
    {
        id: "2",
        questionId: "2",
        answers: ["1"]
    },
    {
        id: "3",
        questionId: "3",
        answers: ["0", "2"]
    }
]

const quizzes = [
    {
        "id": "1",
        "description": "Description of quiz",
        "ownerId": "user1",
        "name": "1.quiz",
        "questions": [
            "string"
        ]
    },
    {
        "id": "2",
        "description": "Description of quiz",
        "ownerId": "user1",
        "name": "2.quiz",
        "questions": [
            "string"
        ]
    },
    {
        "id": "3",
        "description": "Description of quiz",
        "ownerId": "user2",
        "name": "3.quiz",
        "questions": [
            "string"
        ]
    },
    {
        "id": "4",
        "description": "Description of quiz",
        "ownerId": "user3",
        "name": "4.quiz",
        "questions": [
            "string"
        ]
    }
]
const getResultsQuestionsSuccess = res => {
    return {
        type: GET_RES_QUESTIONS_SUCCESS,
        // payload: res.data.payload
        payload: Questions
    };
};

const getResultsQuestionsError = () => {
    return {
        type: GET_RES_QUESTIONS_ERROR
    };
};

const getResultsSuccess = res => {
    // console.log('Get posts SUCCESS ', res);
    return {
        type: GET_RESULTS_SUCCESS,
        payload: results
        // payload: res.data.payload
    }
}

// const getResultsError = () => {
//     return {
//         type: GET_RESULTS_ERROR,

//     }
// }

const getQuizzesSuccess = res => {
    // console.log('Get posts SUCCESS ', res);
    return {
        type: GET_QUIZZES_SUCCESS,
        payload: quizzes
        // payload: res.data.payload
    }
}

// const getQuizzesError = () => {
//     return {
//         type: GET_QUIZZES_ERROR,

//     }
// }

const getRecordsSuccess = res => {
    // console.log('Get posts SUCCESS ', res);
    return {
        type: GET_RECORDS_SUCCESS,
        payload: records
        // payload: res.data.payload
    }
}

// const getRecordsError = () => {
//     return {
//         type: GET_RECORDS_ERROR,

//     }
// }

export const getResults = () => {
    return dispatch => {
        return dispatch(getResultsSuccess())
        // return BootcampAPI.get(API.GET_RESULTS)
        //     .then(res => {
        //         dispatch(getResultsSuccess(res))
        //     })
        //     .catch(err => {
        //         dispatch(getResultsError());
        //     });
    };
};

export const getQuizzes = () => {
    return dispatch => {
        return dispatch(getQuizzesSuccess())
        // return BootcampAPI.get(API.GET_QUIZZES)
        //     .then(res => {
        //         dispatch(getQuizzesSuccess(res))
        //     })
        //     .catch(err => {
        //         dispatch(getQuizzesError());
        //     });
    };
};

export const getRecords = () => {
    return dispatch => {
        return dispatch(getRecordsSuccess())
        // return BootcampAPI.get(API.GET_RECORDS)
        //     .then(res => {
        //         dispatch(getRecordsSuccess(res))
        //     })
        //     .catch(err => {
        //         dispatch(getRecordsError());
        //     });
    };
};

export const getResultsQuestions = () => {
    return dispatch => {
        return dispatch(getResultsQuestionsSuccess())
        //   return BootcampAPI.get(API.GET_QUESTIONS)
        //     .then(res => {
        //       dispatch(getResultsQuestionsSuccess(res));
        //     })
        //     .catch(() => dispatch(getResultsQuestionsError()));
    };
};


