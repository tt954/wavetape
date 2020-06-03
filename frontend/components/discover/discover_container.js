import { connect } from 'react-redux';

import Discover from './discover';

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
})

const mDTP = dispatch => ({
  
})

export default connect(mSTP, mDTP)(Discover);