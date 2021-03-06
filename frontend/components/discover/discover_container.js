import { connect } from 'react-redux';

import Discover from './discover';
import { fetchUsers, createFollow, destroyFollow } from '../../actions/user_actions';
import { fetchTracks } from '../../actions/track_actions';
 
const mSTP = ({ session, entities: { users, tracks } }) => {
  return {
    currentUser: users[session.id],
    users,
    tracks: Object.values(tracks),
  }
}

const mDTP = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchTracks: () => dispatch(fetchTracks()),
  createFollow: userId => dispatch(createFollow(userId)),
  destroyFollow: userId => dispatch(destroyFollow(userId)),
})

export default connect(mSTP, mDTP)(Discover);