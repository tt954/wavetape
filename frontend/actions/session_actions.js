import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

// POJO actions
const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser // currentUser object
})

const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors // errors array
})

// thunk action creators
export const signup = user => {
  return dispatch => {
    // debugger;
    return SessionAPIUtil.signup(user)
      .then(
        user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON))
      );
  };
}

export const signin = user => {
  return dispatch => {
    // debugger;
    return SessionAPIUtil.signin(user)
      .then(
        user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON))
      );
  };
}

export const signout = () => {
  return dispatch => {
    return SessionAPIUtil.signout()
      .then(() => dispatch(signoutCurrentUser()));
  };
}
