import axios from "axios";
import { returnErrors } from "./errorActions"

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    const token = getState().auth.token;
    const config = {
        header: {
            "Content-type": "application/json"
        }
    }

    if (token) {
        config.headers["x-auth-token"] = token;
    }


    axios.get("http://localhost:3001/api/login/user", config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        });
}

//register user
export const register = ({ email, password }) => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    //request body
    const body = JSON.stringify({ email, password });

    axios.post("http://localhost:3001/api/login/r", body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

//login

export const login = ({ email, password }) => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    //request body
    const body = JSON.stringify({ email, password });
    console.log(body)

    axios.post("http://localhost:3001/api/login/l", body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

//logout
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}