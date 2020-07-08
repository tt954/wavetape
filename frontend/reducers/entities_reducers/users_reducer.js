import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../../actions/follow_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const oldState = state;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users);
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    // case RECEIVE_FOLLOW:
    //   debugger;
    // case REMOVE_FOLLOW:
    default:
      return state;
  }
}

export default usersReducer;