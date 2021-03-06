import {call, put, takeEvery} from 'redux-saga/effects';
import {AUTH} from '../../actions/actionTypes';
import {loginSuccess, signupSuccess, loginFailure, signupFailure} from '../../actions/authActions';
import { makeApiCall } from '../../api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* handleLoginRequest(action) {
  try {
    const loginResponse = yield call([this, makeApiCall] , '/auth/login', 'POST', action.credentials);
    const user = loginResponse.user;
    const auth_token = loginResponse.auth_token;
    if (user && auth_token) {
      yield put(loginSuccess(user, auth_token));
    }else{
      console.log('error', loginResponse);
      yield put(loginFailure(loginResponse.message));
    }
  } catch (e) {
    console.log('error', e);
  }
}

function* handleSignUpRequest(action) {
  try {
    const signupResponse = yield call([this, makeApiCall] , '/signup', 'POST', action.credentials);
    const user = signupResponse.user;
    const auth_token = signupResponse.auth_token;
    if (user && auth_token) {
      yield put(signupSuccess(user, auth_token));
    }else{
      console.log('error', signupResponse);
      yield put(signupFailure(signupResponse.message));
    }
  } catch (e) {
    console.log('error', e);
  }
}

export default function* watchAuth() {
  yield takeEvery(AUTH.LOGIN_REQUEST, handleLoginRequest);
  yield takeEvery(AUTH.SIGNUP_REQUEST, handleSignUpRequest);
}
