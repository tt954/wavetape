import { 
  TOGGLE_PLAY, 
  RECEIVE_SELECTED_TRACK } from '../../actions/music_player_actions';

const defaultState = {
  playing: false,
  selectedTrack: null,
}

export default function musicPlayerReducer(state = defaultState, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case TOGGLE_PLAY:
      newState.playing = !state.playing;
      return newState;
    case RECEIVE_SELECTED_TRACK:
      newState.selectedTrack = action.selectedTrack;
      newState.playing = true;
      return newState;
    default:
      return state;
  }
}