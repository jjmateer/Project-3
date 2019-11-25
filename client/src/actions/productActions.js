import axios from "axios";
import {
  GET_ITEMS,
  GET_BY_CATEGORY,
  GET_BY_NAME,
  ADD_ITEM_TO_CART,
  ITEMS_LOADING,
  GET_USER_CART,
  USER_CHECKOUT
<<<<<<< HEAD
} from "./types";
=======
} from './types';
>>>>>>> d6e6dd79e580400fbb123be6a1c2de0c07f4307d
// import { tokenConfig } from './authActions';
import { returnErrors } from "./errorActions";

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
  console.log(`Adding item to cart...`);

<<<<<<< HEAD
  axios
    .post(`http://localhost:3001/api/cart/add-to-cart/${userID}/${itemID}`)
    .then(res =>
      dispatch({
        type: ADD_ITEM_TO_CART,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
=======

    axios.post(`http://localhost:3001/api/cart/add-to-cart/${userID}/${itemID}`)
        .then(res =>
            dispatch({
                type: ADD_ITEM_TO_CART,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
>>>>>>> d6e6dd79e580400fbb123be6a1c2de0c07f4307d
};

export const getUserCart = (userID) => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(`http://localhost:3001/api/cart/user-cart/${userID}`)
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

<<<<<<< HEAD
export const userCheckout = userID => dispatch => {
  dispatch(setItemsLoading());
  axios
    .post(`http://localhost:3001/api/cart/checkout/${userID}`)
    .then(res =>
      dispatch({
        type: USER_CHECKOUT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
=======
export const userCheckout = (userID) => dispatch => {
    dispatch(setItemsLoading());
    axios
        .post(`http://localhost:3001/api/cart/checkout/${userID}`)
        .then(res =>
            dispatch({
                type: USER_CHECKOUT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
>>>>>>> d6e6dd79e580400fbb123be6a1c2de0c07f4307d
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
<<<<<<< HEAD

//================================================
// export const userCheckout = userID => dispatch => {
//   dispatch(setItemsLoading());
//   axios
//     .post(`http://localhost:3001/api/cart/user-cart/chekcout/${userID}`)
//     .then(res =>
//       dispatch({
//         type: USER_CHECKOUT,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };
=======
>>>>>>> d6e6dd79e580400fbb123be6a1c2de0c07f4307d
