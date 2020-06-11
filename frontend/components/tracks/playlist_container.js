import { connect } from 'react-redux';

import Playlist from './playlist';
import { receiveSelectedTrack } from '../../actions/music_player_actions';

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
})

const mDTP = dispatch => ({
  receiveSelectedTrack: track => dispatch(receiveSelectedTrack(track)),
})

export default connect(mSTP, mDTP)(Playlist);