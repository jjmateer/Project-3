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


    axios.get("http://localhost:3001/api/login/l/user", config)
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
export const register = ({ name, email, password }) => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    //request body
    const body = JSON.stringify({ email, password });

    axios.post("http://localhost:3001/api/login/l/user", body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

//logout
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}