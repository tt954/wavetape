import { connect } from 'react-redux';

import ProfileShow from './profile_show'; 
import { openModal } from '../../actions/modal_actions';
import { fetchUser, fetchUsers, createFollow, destroyFollow } from '../../actions/user_actions';
import { fetchTracks } from '../../actions/track_actions';
import { receiveSelectedTrack, togglePlay } from '../../actions/music_player_actions';

const mSTP = ({ session, ui, entities: { users, tracks }}, ownProps) => {
  return {
    currentUser: users[session.id],
    user: users[ownProps.match.params.userId],
    users,
    tracks: Object.values(tracks),
    playing: ui.musicPlayer.playing,
    selectedTrack: ui.musicPlayer.selectedTrack,
  };
}

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  createFollow: userId => dispatch(createFollow(userId)),
  destroyFollow: userId => dispatch(destroyFollow(userId)),
  fetchTracks: () => dispatch(fetchTracks()),
  receiveSelectedTrack: track => dispatch(receiveSelectedTrack(track)),
  togglePlay: () => dispatch(togglePlay()),
})

export default connect(mSTP, mDTP)(ProfileShow);