import axios from "axios";
import { returnErrors } from "../actions/errorActions";
import jwt_decode from "jwt-decode";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_ORDERS,
    GET_ORDERS_FAIL,
    GET_ORDERS_SUCCESS
} from "./types";

export const loadUser = () => (dispatch) => {
    dispatch({ type: USER_LOADING });
    if (localStorage.getItem("jwtToken")) {
        const body = {
            id: jwt_decode(localStorage.getItem("jwtToken")).id,
            token: localStorage.getItem("jwtToken")
        }

        axios
            .post('/api/auth/user', body)
            .then(res => {
                dispatch({
                    type: USER_LOADED,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.response.status));
                dispatch({
                    type: AUTH_ERROR
                });
            });
    } else {
        dispatch({ type: AUTH_ERROR });
    }
};
export const register = newUser => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    axios.post("/api/auth/register", newUser, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            window.location.reload()
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}


export const login = (userData) => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    axios.post("/api/auth/login", userData, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            window.location.reload()
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}
export const getOrders = (userID) => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    dispatch({ type: GET_ORDERS });
    axios.get(`/api/inventory/orders/${userID}`, userID, config)
        .then(res => {
            dispatch({
                type: GET_ORDERS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, "GET_ORDERS_FAIL"));
            dispatch({
                type: GET_ORDERS_FAIL
            })
        })
}

export const logout = () => {
    localStorage.clear();
    return {
        type: LOGOUT_SUCCESS
    }
}
