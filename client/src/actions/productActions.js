import axios from 'axios';
import {
    GET_ITEMS,
    // ADD_ITEM, 
    // ADD_ITEM_TO_CART, 
    ITEMS_LOADING
} from './types';
// import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/inventory')
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

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};