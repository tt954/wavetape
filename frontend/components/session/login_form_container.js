import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Log In",
  }
}

const mDTP = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
  }
}

export default connect(mSTP, mDTP)(SessionForm);