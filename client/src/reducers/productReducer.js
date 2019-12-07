import {
  GET_ITEMS,
  ADD_ITEM,
  GET_BY_CATEGORY,
  GET_BY_NAME,
  ADD_ITEM_TO_CART,
  ITEMS_LOADING,
  GET_USER_CART,
  USER_CHECKOUT,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAIL,
  VIEW_ITEM
} from "../actions/types";

const initialState = {
  items: [],
  items_search: [],
  user_cart: [],
  item_being_viewed: [],
  loading: false,
  msg: null,
  checkout: false
};

export default function (state = initialState, action) {
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
    case USER_CHECKOUT:
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
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        user_cart: action.payload,
        loading: false,
        checkout:true
      };
    case CHECKOUT_FAIL:
      return {
        ...state,
        loading:false,
        checkout:false
      }
    case VIEW_ITEM:
      return {
        ...state,
        item_being_viewed: action.payload,
        loading: false
      }
    default:
      return state;
  }
}
