import {call, put, takeEvery} from 'redux-saga/effects';
import {AUTH} from '../../actions/actionTypes';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* handleLoginRequest(action) {
  try {
    console.log(action.credentials);
    const response = yield fetch(
      'https://fathomless-ridge-02021.herokuapp.com/auth/login',
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(action.credentials), // body data type must match "Content-Type" header
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  } catch (e) {
    console.log('error', e);
  }
}

export default function* watchAuth() {
  yield takeEvery(AUTH.LOGIN_REQUEST, handleLoginRequest);
}
