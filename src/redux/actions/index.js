import axios from 'axios';
import { BASE_API_URL } from "../../helpers/config";
import { FETCH_TASKS, LOGIN_USER, SHOW_AUTH_ERROR } from "../constants/action-types";
import history from '../../helpers/history';


export const loginUser = (userDetails) => {
    return (dispatch) => {
        let LOGIN_URL = `${BASE_API_URL}/personnel/login`
        axios.post(LOGIN_URL, userDetails)
            .then(res => {
                localStorage.setItem('mw_auth_token', res.data.token);
                dispatch({
                    type: LOGIN_USER, payload: res.data
                });
                if (res.data.token) {
                    history.push("/")
                }
            })
            .catch(err => {
                dispatch({
                    type: SHOW_AUTH_ERROR, payload: true
                })
            })
    }
}

export const fetchTasks = () => {
    return dispatch => {
        let TASKS_URL = `${BASE_API_URL}/tasks/assigned?page=${1}&limit=${5}&order=created&orderMethod=DESC`;
        const AUTH_TOKEN = localStorage.getItem("mw_auth_token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
        return axios.get(TASKS_URL)
            .then(res => dispatch({
                type: FETCH_TASKS,
                payload: res
            }))
    }
}