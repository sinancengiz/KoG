import {GAME} from '../../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  userInfo: null,
  failure: false,
  error: null,
  game: null,
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case GAME.CREATE_GAME_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        failure: false,
        error: null,
      };
    case GAME.CREATE_GAME_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        failure: false,
        game: action.game,
        error: null,
      };
    case GAME.CREATE_GAME_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        game: null,
        error: action.error,
      };
    default:
      return state;
  }
}
