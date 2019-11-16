import axios from 'axios';
import {
    GET_ITEMS,
    GET_BY_CATEGORY,
    GET_BY_NAME,
    // ADD_ITEM, 
    ADD_ITEM_TO_CART, 
    ITEMS_LOADING,
    GET_USER_CART
} from './types';
// import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('http://localhost:3001/api/inventory')
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const getByCategory = (query) => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(`http://localhost:3001/api/inventory/category/${query}`)
        .then(res =>
            dispatch({
                type: GET_BY_CATEGORY,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const getByName = (query) => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(`http://localhost:3001/api/inventory/product-name/${query}`)
        .then(res =>
            dispatch({
                type: GET_BY_NAME,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addToCart = (userID, itemID) => dispatch => {
    console.log(`sending post request...`)

    axios.post(`http://localhost:3001/api/inventory/add-to-cart/${userID}/${itemID}`)
        .then(res =>
            dispatch({
                type: ADD_ITEM_TO_CART
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const getUserCart = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('http://localhost:3001/api/inventory/user-cart/:id')
        .then(res =>
            dispatch({
                type: GET_USER_CART,
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