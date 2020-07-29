import { connect } from 'react-redux';

import TrackShow from './track_show';
import { fetchTrack } from '../../actions/track_actions';
import { togglePlay, receiveSelectedTrack } from '../../actions/music_player_actions';
import { createFollow, destroyFollow } from '../../actions/user_actions';

const mSTP = ({ session, ui, entities: { tracks, users }}, ownProps) => {
  const trackId = ownProps.match.params.trackId;
  const track = tracks[trackId];

  return {
    track,
    playing: ui.musicPlayer.playing,
    selectedTrack: ui.musicPlayer.selectedTrack,
    currentUser: users[session.id],
  }
}

const mDTP = dispatch => ({
  fetchTrack: trackId => dispatch(fetchTrack(trackId)),
  togglePlay: () => dispatch(togglePlay()),
  receiveSelectedTrack: selectedTrack => dispatch(receiveSelectedTrack(selectedTrack)),
  createFollow: userId => dispatch(createFollow(userId)),
  destroyFollow: userId => dispatch(destroyFollow(userId)),
})

export default connect(mSTP, mDTP)(TrackShow);