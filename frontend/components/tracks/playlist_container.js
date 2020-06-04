import { connect } from 'react-redux';

import Playlist from './playlist';

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Playlist);