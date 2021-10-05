import {AUTH} from '../actionTypes';

const loginRequest = (credentials) => ({
  type: AUTH.LOGIN_REQUEST,
  credentials,
});

const loginSuccess = (user, token, userOrganization) => ({
  type: AUTH.LOGIN_SUCCESS,
  user,
  token,
  userOrganization,
});

const loginFailure = (err) => ({
  type: AUTH.LOGIN_FAILURE,
  err,
});

const signupRequest = (credentials) => ({
  type: AUTH.SIGNUP_REQUEST,
  credentials,
});

const signupSuccess = (user) => ({
  type: AUTH.SIGNUP_SUCCESS,
  user,
});

const signupFailure = (err) => ({
  type: AUTH.SIGNUP_FAILURE,
  err,
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
