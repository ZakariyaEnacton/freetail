import {takeLatest, put, call} from 'redux-saga/effects';
import {
  FAILED_ADD_TO_CART,
  FAILED_PRODUCT_DATA,
  REQUEST_ADD_TO_CART,
  REQUEST_PRODUCT_DATA,
  SUCCESS_ADD_TO_CART,
  SUCCESS_PRODUCT_DATA,
} from '../Action/actionTypes';

function* fetchProductsSaga() {
  try {
    const res = yield call(fetch, 'https://fakestoreapi.com/products');
    const data = yield call([res, 'json']);
    yield put({type: SUCCESS_PRODUCT_DATA, payload: data});
  } catch (error) {
    yield put({type: FAILED_PRODUCT_DATA, payload: error});
  }
}

function* addToCartSaga(action) {
  try {
    // Perform necessary actions to add to cart
    yield put({type: SUCCESS_ADD_TO_CART, payload: action.payload});
  } catch (error) {
    yield put({type: FAILED_ADD_TO_CART, payload: error});
  }
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_PRODUCT_DATA, fetchProductsSaga);
  yield takeLatest(REQUEST_ADD_TO_CART, addToCartSaga);
}
