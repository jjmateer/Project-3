import axios from "axios";
import {
    GET_ITEMS,
    GET_BY_CATEGORY,
    GET_BY_NAME,
    ITEMS_LOADING,
    VIEW_ITEM
} from './types';
import { returnErrors } from "./errorActions";

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

export const getByCategory = (query) => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(`/api/inventory/category/${query}`)
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
        .get(`/api/inventory/product-name/${query}`)
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
export const viewItem = itemID => dispatch => {
    dispatch(setItemsLoading());
    axios.get(`/api/inventory/view-item/${itemID}`)
        .then(res =>
            dispatch({
                type: VIEW_ITEM,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};
