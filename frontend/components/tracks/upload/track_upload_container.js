import { connect } from 'react-redux';

import TrackUpload from './track_upload';
import { fetchGenres } from '../../../actions/track_actions';

const mSTP = state => {
  // debugger;
  return {
    genres: Object.values(state.entities.genres),
  }
}

const mDTP = dispatch => ({
  fetchGenres: () => dispatch(fetchGenres()),
})

export default connect(mSTP, mDTP)(TrackUpload);