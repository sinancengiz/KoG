import {GAME} from '../actionTypes';

const createGameRequest = (credentials) => ({
  type: GAME.CREATE_GAME_REQUEST,
  credentials,
});

const createGameSuccess = (game) => ({
  type: GAME.CREATE_GAME_SUCCESS,
  game,
});

const createGameFailure = (error) => ({
  type: GAME.CREATE_GAME_FAILURE,
  error,
});

const getGameRequest = (credentials) => ({
  type: GAME.GET_GAME_REQUEST,
  credentials,
});

const getGameSuccess = (game) => ({
  type: GAME.GET_GAME_SUCCESS,
  game,
});

const getGameFailure = (error) => ({
  type: GAME.GET_GAME_FAILURE,
  error,
});

export {
    createGameRequest,
    createGameSuccess,
    createGameFailure,
};