import axios from 'axios';
import {
    GET_ITEMS,
    GET_BY_CATEGORY,
    // ADD_ITEM, 
    // ADD_ITEM_TO_CART, 
    ITEMS_LOADING
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

export const getByCategory = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('http://localhost:3001/api/inventory/:category')
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

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};