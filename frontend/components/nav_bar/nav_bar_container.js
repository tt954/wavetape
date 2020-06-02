import { connect } from 'react-redux';

import NavBar from './nav_bar';
import { signout } from '../../actions/session_actions';

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id], 
})

const mDTP = dispatch => ({
  signout: () => dispatch(signout()),
})

export default connect(mSTP, mDTP)(NavBar);