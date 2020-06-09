import { connect } from 'react-redux';

import TrackShow from './track_show';
import { fetchTrack } from '../../actions/track_actions';

const mSTP = ({session, entities: { tracks }}, ownProps) => {
  const trackId = ownProps.match.params.trackId;
  const track = tracks[trackId];

  return {
    track,
  }
}

const mDTP = dispatch => ({
  fetchTrack: trackId => dispatch(fetchTrack(trackId)),
})

export default connect(mSTP, mDTP)(TrackShow);