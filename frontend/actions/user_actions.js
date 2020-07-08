import * as UserAPIUtil from '../util/user_api_util';
import * as FollowAPIUtil from "../util/follow_api_util";

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const fetchUser = userId => {
  return dispatch => {
    return UserAPIUtil.fetchUser(userId)
      .then(user => dispatch(receiveUser(user)));
  };
}

export const fetchUsers = () => {
  return dispatch => {
    return UserAPIUtil.fetchUsers()
      .then(users => dispatch(receiveUsers(users)));
  };
}