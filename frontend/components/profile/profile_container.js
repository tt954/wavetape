import { connect } from 'react-redux';

import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';

const mSTP = ({ session, entities: { users }}, ownProps) => {
  const user = users[ownProps.match.params.userId];

  return {
    user,
    currentUser: users[session.id],
  };
}

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mSTP, mDTP)(Profile);