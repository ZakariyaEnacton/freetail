import {
  FAILED_ADD_TO_CART,
  FAILED_PRODUCT_DATA,
  REQUEST_ADD_TO_CART,
  REQUEST_PRODUCT_DATA,
  SUCCESS_ADD_TO_CART,
  SUCCESS_PRODUCT_DATA,
} from './actionTypes';

export const requestProductData = () => ({
  type: REQUEST_PRODUCT_DATA,
});

export const successProductData = products => ({
  type: SUCCESS_PRODUCT_DATA,
  payload: products,
});

export const failedProductData = error => ({
  type: FAILED_PRODUCT_DATA,
  payload: error,
});

export const requestAddToCart = product => ({
  type: REQUEST_ADD_TO_CART,
  payload: product,
});

export const successAddToCart = product => ({
  type: SUCCESS_ADD_TO_CART,
  payload: product,
});

export const failedAddToCart = error => ({
  type: FAILED_ADD_TO_CART,
  payload: error,
});
