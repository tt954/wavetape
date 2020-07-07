import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollow = userId => ({
  type: RECEIVE_FOLLOW,
  userId
})

const removeFollow = userId => ({
  type: REMOVE_FOLLOW,
  userId
})

export const createFollow = userId => {
  return dispatch => {
    return FollowAPIUtil.follow(userId)
      .then(userId => dispatch(receiveFollow(userId)));
  }
}

export const destroyFollow = userId => {
  return dispatch => {
    return FollowAPIUtil.unfollow(userId)
      .then(userId => dispatch(removeFollow(userId)));
  }
}

