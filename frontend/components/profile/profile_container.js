import { connect } from 'react-redux';

import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';

const mSTP = ({entities: { users }}, ownProps) => {
  // debugger;
  const user = users[ownProps.match.params.userId];

  return {
    user,
  };
}

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mSTP, mDTP)(Profile);