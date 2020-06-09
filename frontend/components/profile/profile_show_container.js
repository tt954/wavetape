import { connect } from 'react-redux';

import ProfileShow from './profile_show'; 
import { openModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = ({ session, entities: { users }}, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = users[userId];
  // debugger;

  return {
    user, 
    users,
    currentUser: users[session.id],
  };
}

const mDTP = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(mSTP, mDTP)(ProfileShow);