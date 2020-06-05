import { connect } from 'react-redux';

import { signin, receiveErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signin",
    lastStep: 2,
  }
}

const mDTP = (dispatch) => {
  return {
    signin: user => dispatch(signin(user)),
    processForm: user => dispatch(signin(user)),
    closeModal: () => dispatch(closeModal()),
    setErrors: errors => dispatch(receiveErrors(errors)),
  }
}

export default connect(mSTP, mDTP)(SessionForm);