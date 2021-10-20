import {call, put, takeEvery} from 'redux-saga/effects';
import {GAME} from '../../actions/actionTypes';
import {createGameRequest, createGameSuccess, createGameFailure,} from '../../actions/gameActions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* handleCreateGameRequest(action) {
  try {
    console.log(action);
    const createGameResponse = yield fetch(
      'https://fathomless-ridge-02021.herokuapp.com/games',
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(action.credentials), // body data type must match "Content-Type" header
      },
    ).then((response) => response.json());
    console.log('createGameResponse', createGameResponse);
    const game = createGameResponse.game;
    if (game.id) {
      yield put(createGameSuccess(game));
    }
  } catch (e) {
    console.log('error', e);
  }
}

export default function* watchGame() {
  yield takeEvery(GAME.CREATE_GAME_REQUEST, handleCreateGameRequest);
}
