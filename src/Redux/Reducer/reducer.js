import {
  FAILED_ADD_TO_CART,
  FAILED_PRODUCT_DATA,
  FAILED_REMOVE_FROM_CART,
  SUCCESS_ADD_TO_CART,
  SUCCESS_PRODUCT_DATA,
  SUCCESS_REMOVE_FROM_CART,
} from '../Action/actionTypes';
import {combineReducers} from 'redux';

const initialProductsState = {
  data: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case SUCCESS_PRODUCT_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FAILED_PRODUCT_DATA:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialCartState = {
  items: [],
  error: null,
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case SUCCESS_ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        error: null,
      };
    case FAILED_ADD_TO_CART:
      return {
        ...state,
        error: action.payload,
      };
    case SUCCESS_REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        error: null,
      };
    case FAILED_REMOVE_FROM_CART:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
});

export default rootReducer;
