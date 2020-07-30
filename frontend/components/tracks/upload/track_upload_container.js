import { connect } from 'react-redux';

import TrackUpload from './track_upload';
import { createTrack } from '../../../actions/track_actions';

const mSTP = state => {
  return {

  }
}

const mDTP = dispatch => ({
  createTrack: track => dispatch(createTrack(track)),
})

export default connect(mSTP, mDTP)(TrackUpload);