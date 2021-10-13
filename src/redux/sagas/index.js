import {all} from 'redux-saga/effects';
import login from './Auth/login';

const rootSaga = function* rootSaga() {
  yield all([
    login(),
    // add rest of the sagas here
  ]);
};

export default rootSaga;
