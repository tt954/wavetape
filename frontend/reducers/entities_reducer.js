import { combineReducers } from 'redux';

import usersReducer from './entities_reducers/users_reducer';
import tracksReducer from './entities_reducers/tracks_reducer';
import genresReducer from './entities_reducers/genres_reducer';

export default combineReducers({
  users: usersReducer,
  tracks: tracksReducer,
  genres: genresReducer,
})

