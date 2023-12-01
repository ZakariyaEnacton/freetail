import {put, call, takeEvery} from 'redux-saga/effects';
import {
  FAILED_ADD_TO_CART,
  FAILED_PRODUCT_DATA,
  FAILED_REMOVE_FROM_CART,
  REQUEST_ADD_TO_CART,
  REQUEST_PRODUCT_DATA,
  REQUEST_REMOVE_FROM_CART,
  SUCCESS_ADD_TO_CART,
  SUCCESS_PRODUCT_DATA,
  SUCCESS_REMOVE_FROM_CART,
} from '../Action/actionTypes';

function* fetchProductsSaga() {
  try {
    const res = yield call(fetch, 'https://fakestoreapi.com/products');
    const data = yield call([res, 'json']);
    // console.log('Your Data', data);
    yield put({type: SUCCESS_PRODUCT_DATA, payload: data});
  } catch (error) {
    yield put({type: FAILED_PRODUCT_DATA, payload: error});
  }
}

function* addToCartSaga(action) {
  try {
    yield put({type: SUCCESS_ADD_TO_CART, payload: action.payload});
  } catch (error) {
    yield put({type: FAILED_ADD_TO_CART, payload: error});
  }
}

function* removeFromCartSaga(action) {
  try {
    yield put({type: SUCCESS_REMOVE_FROM_CART, payload: action.payload});
  } catch (error) {
    yield put({type: FAILED_REMOVE_FROM_CART, payload: error});
  }
}

export default function* rootSaga() {
  yield takeEvery(REQUEST_PRODUCT_DATA, fetchProductsSaga);
  yield takeEvery(REQUEST_ADD_TO_CART, addToCartSaga);
  yield takeEvery(REQUEST_REMOVE_FROM_CART, removeFromCartSaga);
}
