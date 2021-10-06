import {AUTH} from '../../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  userInfo: null,
  failure: false,
  error: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: !state.isAuthenticated,
        failure: false,
        error: null,
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        failure: false,
        user: action.user,
        error: null,
      };
    case AUTH.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        user: null,
        error: action.error,
      };
    case AUTH.SIGNUP_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        failure: false,
        error: null,
      };
    case AUTH.SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        failure: false,
        user: action.user,
        error: null,
      };
    case AUTH.SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        user: null,
        error: action.error,
      };
    case AUTH.REQUEST_LOGOUT:
      return {
        ...state,
        failure: false,
        error: null,
      };
    case AUTH.LOGOUT:
      return {
        isAuthenticated: false,
        isFetching: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
}
