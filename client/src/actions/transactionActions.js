import axios from "axios";
import {
    ADD_ITEM_TO_CART,
    ITEMS_LOADING,
    GET_USER_CART,
    USER_CHECKOUT
} from './types';
import { returnErrors } from "./errorActions";

export const addToCart = (userID, itemID, quantity) => dispatch => {
    console.log(itemID)
    axios.post(`/api/cart/add-to-cart/${userID}/${itemID}/${quantity}`)
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
        .get(`/api/cart/user-cart/${userID}`)
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
    console.log(userID)
    dispatch(setItemsLoading());
    axios
        .post(`/api/cart/checkout/${userID}`)
        .then(res =>
            dispatch({
                type: USER_CHECKOUT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};
