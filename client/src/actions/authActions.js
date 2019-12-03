import axios from "axios";
<<<<<<< HEAD
import { returnErrors } from "./errorActions";
=======
import { returnErrors } from "../actions/errorActions";
import jwt_decode from "jwt-decode";
>>>>>>> 96dfe0b099cf60cbf311a95e5be28ab3169b6a01

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

<<<<<<< HEAD
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const token = getState().auth.token;
  const config = {
    header: {
      "Content-type": "application/json"
    }
  };

  if (token) {
    const body = { user: getState().auth.user };
    axios
      .post("http://localhost:3001/api/login/user", body, config)
      .then(res =>
        dispatch({
          type: USER_LOADED,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: AUTH_ERROR
        });
      });
  }
};

//register user
export const register = ({ username, email, password }) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
=======
export const loadUser = () => (dispatch) => {
    dispatch({ type: USER_LOADING });
    if (localStorage.getItem("jwtToken")) {
        const body = {
            id: jwt_decode(localStorage.getItem("jwtToken")).id,
            token: localStorage.getItem("jwtToken")
        }

        axios
            .post('http://localhost:3001/api/auth/user', body)
            .then(res => {
                console.log(res.data)
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
>>>>>>> 96dfe0b099cf60cbf311a95e5be28ab3169b6a01
    }
  };

<<<<<<< HEAD
  //request body
  const body = JSON.stringify({ username, email, password });

  axios
    .post("http://localhost:3001/api/login/r", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};
=======
    axios.post("http://localhost:3001/api/auth/register", newUser, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}
>>>>>>> 96dfe0b099cf60cbf311a95e5be28ab3169b6a01


<<<<<<< HEAD
export const login = ({ email, password }) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
=======
export const login = (userData) => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
>>>>>>> 96dfe0b099cf60cbf311a95e5be28ab3169b6a01
    }
  };

<<<<<<< HEAD
  //request body
  const body = JSON.stringify({ email, password });

  axios
    .post("http://localhost:3001/api/login/l", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
=======
    axios.post("http://localhost:3001/api/auth/login", userData, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}
>>>>>>> 96dfe0b099cf60cbf311a95e5be28ab3169b6a01

export const logout = () => {
<<<<<<< HEAD
  window.location.reload();
  return {
    type: LOGOUT_SUCCESS
  };
};
=======
    localStorage.clear();
    return {
        type: LOGOUT_SUCCESS
    }
}
>>>>>>> 96dfe0b099cf60cbf311a95e5be28ab3169b6a01
