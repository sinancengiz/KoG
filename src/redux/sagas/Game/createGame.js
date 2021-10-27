import {call, put, takeEvery, select} from 'redux-saga/effects';
import {GAME} from '../../actions/actionTypes';
import {createGameRequest, createGameSuccess, createGameFailure,} from '../../actions/gameActions';

const getToken = state => state.auth.authToken;

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* handleCreateGameRequest(action) {
  try {
    const token = yield select(getToken);
    console.log(token);
    const createGameResponse = yield fetch(
      'https://fathomless-ridge-02021.herokuapp.com/games',
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(action.credentials), // body data type must match "Content-Type" header
      },
    ).then((response) => response.json());
    console.log('createGameResponse', createGameResponse);
    const game = createGameResponse;
    if (game.id) {
      yield put(createGameSuccess(game));
    }else{
      yield put(createGameFailure(createGameResponse.message));
    }
  } catch (e) {
    console.log('error', e);
  }
}

export default function* watchGame() {
  yield takeEvery(GAME.CREATE_GAME_REQUEST, handleCreateGameRequest);
}
