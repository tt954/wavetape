import { connect } from 'react-redux';

import TrackUpload from './track_upload';
import { createTrack } from '../../../actions/track_actions';

const mSTP = ( { session, entities: { users }} ) => {
  return {
    currentUser: users[session.id],
  }
}

const mDTP = dispatch => ({
  createTrack: track => dispatch(createTrack(track)),
})

export default connect(mSTP, mDTP)(TrackUpload);