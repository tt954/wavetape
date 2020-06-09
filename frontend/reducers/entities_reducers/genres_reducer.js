import { RECEIVE_GENRES } from '../../actions/track_actions';

const genresReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_GENRES:
      return Object.assign({}, state, action.genres);
    default:
      return state;
  }
}

export default genresReducer;