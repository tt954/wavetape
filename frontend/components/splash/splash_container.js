import { connect } from 'react-redux';

import Splash from './splash';
import { openModal } from '../../actions/modal_actions';
import { fetchTracks } from '../../actions/track_actions';
import { receiveSelectedTrack } from '../../actions/music_player_actions';

const mSTP = ({ session, entities: { users, tracks } }) => ({
  currentUser: users[session.id],
  tracks: Object.values(tracks),
})

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchTracks: () => dispatch(fetchTracks()),
  receiveSelectedTrack: track => dispatch(receiveSelectedTrack(track)),
})

export default connect(mSTP, mDTP)(Splash);