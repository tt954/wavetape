import { connect } from 'react-redux';

import TrackShow from './track_show';
import { fetchTrack } from '../../actions/track_actions';
import { togglePlay, receiveSelectedTrack } from '../../actions/music_player_actions';

const mSTP = ({ ui, entities: { tracks }}, ownProps) => {
  const trackId = ownProps.match.params.trackId;
  const track = tracks[trackId];

  return {
    track,
    playing: ui.musicPlayer.playing,
    selectedTrack: ui.musicPlayer.selectedTrack,
  }
}

const mDTP = dispatch => ({
  fetchTrack: trackId => dispatch(fetchTrack(trackId)),
  togglePlay: () => dispatch(togglePlay()),
  receiveSelectedTrack: selectedTrack => dispatch(receiveSelectedTrack(selectedTrack)),
})

export default connect(mSTP, mDTP)(TrackShow);