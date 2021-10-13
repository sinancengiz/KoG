import {AUTH} from '../actionTypes';

const loginRequest = (credentials) => ({
  type: AUTH.LOGIN_REQUEST,
  credentials,
});

const loginSuccess = (user, auth_token) => ({
  type: AUTH.LOGIN_SUCCESS,
  user,
  auth_token,
});

const loginFailure = (error) => ({
  type: AUTH.LOGIN_FAILURE,
  error,
});

const signupRequest = (credentials) => ({
  type: AUTH.SIGNUP_REQUEST,
  credentials,
});

const signupSuccess = (user, auth_token) => ({
  type: AUTH.SIGNUP_SUCCESS,
  user,
  auth_token,
});

const signupFailure = (error) => ({
  type: AUTH.SIGNUP_FAILURE,
  error,
});

const requestLogout = () => ({
  type: AUTH.REQUEST_LOGOUT,
});

const logout = () => ({
  type: AUTH.LOGOUT,
});

export {
  loginRequest,
  loginSuccess,
  loginFailure,
  requestLogout,
  signupRequest,
  signupSuccess,
  signupFailure,
  logout,
};
