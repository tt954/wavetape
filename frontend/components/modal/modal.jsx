import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import SigninFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/signup_form_container';
import ProfileEditForm from '../profile/profile_edit_container';

function Modal({ modal, closeModal, clearErrors }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <SigninFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'profileEdit':
      component = <ProfileEditForm />
      break;
    default:
      return null;
  }

  function closeSession() {
    closeModal();
    clearErrors();
  }

  return (
    <div className="modal-background" onClick={closeSession}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
