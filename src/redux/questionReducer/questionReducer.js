import {

} from "../../constants";

const defaultState = {
    isQuestionSelected: false,
};


export const nextQuestionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case NEXT_QUESTION_SUCCESSFUL:
            return { ...state, isLoggedIn: true };
        case NEXT_QUESTION_FAILED:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
};
