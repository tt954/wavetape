import React from 'react';
import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
  };
}

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Signin
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(mSTP, mDTP)(SignupForm);