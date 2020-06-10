import { connect } from 'react-redux';

import Splash from './splash';
import { openModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchTracks } from '../../actions/track_actions';

const mSTP = ({ session, entities: { users, tracks } }) => ({
  currentUser: users[session.id],
  users,
  tracks: Object.values(tracks),
})

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchTracks: () => dispatch(fetchTracks()),
})

export default connect(mSTP, mDTP)(Splash);