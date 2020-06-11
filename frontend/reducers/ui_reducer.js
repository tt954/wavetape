import { combineReducers } from 'redux';

import modal from './ui_reducers/modal_reducer';
import musicPlayer from './ui_reducers/music_player_reducer';

export default combineReducers({
  modal,
  musicPlayer,
});