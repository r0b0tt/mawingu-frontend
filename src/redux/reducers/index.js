import { LOGIN_USER, FETCH_TASKS } from "../constants/action-types";


const initialState = {
    user: {},
    tasks: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, user: action.payload }

        case FETCH_TASKS:
            return { ...state, tasks: action.payload }

        default:
            return state
    }
}

export default rootReducer;