import axios from "axios";
import {
    ADD_ITEM_TO_CART,
    ITEMS_LOADING,
    GET_USER_CART,
    USER_CHECKOUT,
    CHECKOUT_SUCCESS
} from './types';
import { returnErrors } from "./errorActions";

export const addToCart = (userID, itemID, quantity) => dispatch => {
    console.log(itemID)
    axios.post(`http://localhost:3001/api/cart/add-to-cart/${userID}/${itemID}/${quantity}`)
        .then(res =>
            dispatch({
                type: ADD_ITEM_TO_CART,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const getUserCart = (userID) => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(`http://localhost:3001/api/cart/user-cart/${userID}`)
        .then(res => {
            dispatch({
                type: GET_USER_CART,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const userCheckout = (userID) => dispatch => {
    dispatch(checkoutLoading());
    axios
        .post(`http://localhost:3001/api/cart/checkout/${userID}`)
        .then(res =>
            dispatch({
                type: CHECKOUT_SUCCESS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)),
        );
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};

export const checkoutLoading = () => {
    return {
        type: USER_CHECKOUT
    };
};
