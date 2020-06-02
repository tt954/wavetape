import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign Up",
  };
}

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
  };
}

export default connect(mSTP, mDTP)(SignupForm);