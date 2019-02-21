import BootcampAPI from "../../helpers/BootcampAPI";
import { API, GET_RESULTS_SUCCESS, GET_RESULTS_ERROR, GET_QUIZZES_SUCCESS, GET_QUIZZES_ERROR, GET_MYQUIZZES_SUCCESS, GET_MYQUIZZES_ERROR } from "../../constants";

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

const getResultsError = () => {
    return {
        type: GET_RESULTS_ERROR,

    }
}

const getQuizzesSuccess = res => {
    // console.log('Get posts SUCCESS ', res);
    return {
        type: GET_QUIZZES_SUCCESS,
        payload: quizzes
    }
}

const getQuizzesError = () => {
    return {
        type: GET_QUIZZES_ERROR,

    }
}

const getMyQuizzesSuccess = res => {
    // console.log('Get posts SUCCESS ', res);
    return {
        type: GET_MYQUIZZES_SUCCESS,
        payload: myquizzes
    }
}

const getMyQuizzesError = () => {
    return {
        type: GET_MYQUIZZES_ERROR,

    }
}

export const getResults = () => {
    return dispatch => {
        return dispatch(getResultsSuccess())
        // return BootcampAPI.get(API.GET_RESULTS)
        //     .then(res => {
        //         dispatch(getResultsSuccess(res))
        //         console.log('results ', res)
        //     })
        //     .catch(err => {
        //         console.error("ERROR", err);
        //         dispatch(getResultsError());
        //     });
    };
};

export const getQuizzes = () => {
    return dispatch => {
        return dispatch(getQuizzesSuccess())
        // return BootcampAPI.get(API.GET_QUIZZES)
        //     .then(res => {
        //         console.log('quizzes ', res)
        //         dispatch(getQuizzesSuccess(res))
        //     })

        //     .catch(err => {
        //         console.error("ERROR", err);
        //         dispatch(getQuizzesError());
        //     });
    };
};

