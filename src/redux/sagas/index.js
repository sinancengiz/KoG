import {all} from 'redux-saga/effects';
import login from './Auth/login';
import game from './Game/createGame';

const rootSaga = function* rootSaga() {
  yield all([
    login(),
    // add rest of the sagas here
    game(),
  ]);
};

export default rootSaga;
