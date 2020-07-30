import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
})

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
})

const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
})

export const fetchTracks = () => {
  return dispatch => {
    return TrackAPIUtil.fetchTracks()
      .then(tracks => dispatch(receiveTracks(tracks)));
  };
}

export const fetchTrack = trackId => {
  return dispatch => {
    return TrackAPIUtil.fetchTrack(trackId)
      .then(track => dispatch(receiveTrack(track)));
  };
}

export const createTrack = track => {
  return dispatch => {
    return TrackAPIUtil.createTrack(track)
      .then(
        track => dispatch(receiveTrack(track))),
        err => dispatch(receiveErrors(err.responseJSON)
      );
  }
}

export const editTrack = (track, id) => {
  return dispatch => {
    return TrackAPIUtil.updateTrack(track, id)
      .then(
        track => dispatch(receiveTrack(track))),
        err => dispatch(receiveErrors(err.responseJSON)
      );
  }
}

export const destroyTrack = trackId => {
  return dispatch => {
    return TrackAPIUtil.destroyTrack(trackId)
      .then(() => dispatch(removeTrack(trackId)));
  }
}