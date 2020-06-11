import { connect } from 'react-redux';

import MusicPlayer from './music_player';
import { togglePlay, receiveSelectedTrack } from '../../../actions/music_player_actions';

const mSTP = (state, ownProps) => {
  return {
    playing: state.ui.musicPlayer.playing,
    selectedTrack: state.ui.musicPlayer.selectedTrack,
  }
}

const mDTP = dispatch => ({
  togglePlay: () => dispatch(togglePlay()),
  receiveSelectedTrack: selectedTrack => dispatch(receiveSelectedTrack(selectedTrack)),
})

export default connect(mSTP, mDTP)(MusicPlayer);