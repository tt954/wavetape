import { connect } from 'react-redux';

import { signin } from '../../actions/session_actions';
import SigninForm from './signin_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign in",
  }
}

const mDTP = (dispatch) => {
  return {
    processForm: (user) => dispatch(signin(user)),
  }
}

export default connect(mSTP, mDTP)(SigninForm);