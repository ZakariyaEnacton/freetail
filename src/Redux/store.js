import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducer/reducer';
import rootSaga from './Saga/publicSaga';
import {configureStore} from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: defaultMiddle =>
    defaultMiddle({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleWare),
});

sagaMiddleware.run(rootSaga);

export default store;
