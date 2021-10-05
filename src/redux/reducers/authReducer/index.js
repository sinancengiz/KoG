import {AUTH} from '../../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  userInfo: {},
  failure: false,
  error: {},
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH.LOGIN:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        failure: false,
        error: {},
      };
  }
}
