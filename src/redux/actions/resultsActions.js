import {
  GET_RECORDS_SUCCESS,
  // GET_RECORDS_ERROR ,
  GET_RESULTS_SUCCESS,
  // GET_RESULTS_ERROR,
  GET_QUIZZES_SUCCESS,
  // GET_QUIZZES_ERROR
} from "../../constants";

const results = [
    {
        "id": "string",
        "recordIds": [
            "string"
        ],
        "userId": "string",
        "quizId": "1"
    },
    {
        "id": "string",
        "recordIds": [
            "string"
        ],
        "userId": "string",
        "quizId": "2"
    },
    {
        "id": "string",
        "recordIds": [
            "string"
        ],
        "userId": "string",
        "quizId": "3"
    },
    {
        "id": "string",
        "recordIds": [
            "string"
        ],
        "userId": "string",
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

const quizzes = [
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
    {
        "id": "3",
        "description": "Description of quiz",
        "ownerId": "string",
        "name": "3.quiz",
        "questions": [
            "string"
        ]
    },
    {
        "id": "4",
        "description": "Description of quiz",
        "ownerId": "string",
        "name": "3.quiz",
        "questions": [
            "string"
        ]
    }
]

const getResultsSuccess = res => {
    // console.log('Get posts SUCCESS ', res);
    return {
        type: GET_RESULTS_SUCCESS,
        payload: results
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
        payload: myquizzes

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


