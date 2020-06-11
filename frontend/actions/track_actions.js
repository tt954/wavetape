import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
})

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
})

export const fetchTrack = trackId => {
  return dispatch => {
    return TrackAPIUtil.fetchTrack(trackId)
      .then(track => dispatch(receiveTrack(track)));
  };
}

export const fetchTracks = () => {
  return dispatch => {
    return TrackAPIUtil.fetchTracks()
      .then(tracks => dispatch(receiveTracks(tracks)));
  };
}