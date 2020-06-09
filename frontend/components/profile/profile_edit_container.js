import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';
import ProfileEditForm from './profile_edit_form';

const mSTP = ({ session, entities: { users } }, ownProps) => {
  const user = users[ownProps.match.params.userId];

  return {
    user,
  };
}

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(ProfileEditForm);