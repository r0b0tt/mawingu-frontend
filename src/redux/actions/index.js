import { BASE_API_URL } from "../../helpers/config";
import { SET_REGISTRATION_FORM_DATA, FETCH_TASKS, LOGIN_USER } from "../constants/action-types";
import axios from 'axios';


export const loginUser = (userDetails) => {
    return (dispatch) => {
        let LOGIN_URL = `${BASE_API_URL}/personnel/login`
        axios.post(LOGIN_URL, userDetails)
            .then(res => dispatch({
                type: LOGIN_USER, payload: res
            }))
    }
}

export const fetchTasks = () => {
    return dispatch => {
        let TASKS_URL = `${BASE_API_URL}/tasks/assigned?page=${1}&limit=${10}&order=created&orderMethod=DESC`;
        const AUTH_TOKEN = localStorage.getItem("auth_token");
        axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
        return axios.get(TASKS_URL)
            .then(res => dispatch({
                type: FETCH_TASKS,
                payload: res
            }))
    }
}