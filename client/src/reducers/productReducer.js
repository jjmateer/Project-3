import {
    GET_ITEMS,
    ADD_ITEM,
    GET_BY_CATEGORY,
    GET_BY_NAME,
    ADD_ITEM_TO_CART,
    ITEMS_LOADING,
    GET_USER_CART,
    USER_CHECKOUT
  } from "../actions/types";
  
  const initialState = {
    items: [],
    items_search: [],
    user_cart: [],
    loading: false,
    msg: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ITEMS:
        return {
          ...state,
          items: action.payload,
          loading: false
        };
      case GET_BY_CATEGORY:
        return {
          ...state,
          items_search: action.payload,
          loading: false
        };
      case GET_BY_NAME:
        return {
          ...state,
          items_search: action.payload,
          loading: false
        };
      case ADD_ITEM:
        return {
          ...state,
          items: [action.payload, ...state.items]
        };
      case ITEMS_LOADING:
        return {
          ...state,
          loading: true
        };
      case ADD_ITEM_TO_CART:
        return {
          ...state
        };
      case GET_USER_CART:
        return {
          ...state,
          user_cart: action.payload,
          loading: false
        };
      case USER_CHECKOUT:
        return {
          ...state,
          user_cart: action.payload,
          loading: false
        };
      default:
        return state;
    }
  }