import { combineReducers } from 'redux';

import usersReducer from './entities_reducers/users_reducer';

export default combineReducers({
  users: usersReducer,
})

