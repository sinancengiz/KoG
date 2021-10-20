import {combineReducers} from 'redux';
import auth from './authReducer';
import game from './gameReducer';

const rootReducer = combineReducers({
  auth, game,
});

export default rootReducer;
