import { LOGIN_USER, FETCH_TASKS, SHOW_AUTH_ERROR } from "../constants/action-types";


const initialState = {
    user: {},
    authErrMessage: false,
    tasks: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, user: action.payload, authErrMessage: false }

        case SHOW_AUTH_ERROR:
            return { ...state, authErrMessage: action.payload }

        case FETCH_TASKS:
            return { ...state, tasks: action.payload }

        default:
            return state
    }
}

export default rootReducer;