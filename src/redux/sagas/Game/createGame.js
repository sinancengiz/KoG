import {call, put, takeEvery, select} from 'redux-saga/effects';
import {GAME} from '../../actions/actionTypes';
import {createGameSuccess, createGameFailure} from '../../actions/gameActions';
import {makeApiCall} from '../../api';

const getToken = (state) => state.auth.authToken;

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* handleCreateGameRequest(action) {
  try {
    const token = yield select(getToken);
    const createGameResponse = yield call(
      [this, makeApiCall],
      '/games',
      'POST',
      action.credentials,
      token,
    );
    const game = createGameResponse;
    if (game.id) {
      yield put(createGameSuccess(game));
    } else {
      yield put(createGameFailure(createGameResponse.message));
    }
  } catch (e) {
    console.log('error', e);
  }
}

export default function* watchGame() {
  yield takeEvery(GAME.CREATE_GAME_REQUEST, handleCreateGameRequest);
}
