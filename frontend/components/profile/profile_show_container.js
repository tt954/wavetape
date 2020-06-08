import { connect } from 'react-redux';

import ProfileShow from './profile_show';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = ({ session, entities: { users }}, ownProps) => {
  const user = users[ownProps.match.params.userId];

  return {
    user,
    currentUser: users[session.id],
  };
}

const mDTP = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mSTP, mDTP)(ProfileShow);