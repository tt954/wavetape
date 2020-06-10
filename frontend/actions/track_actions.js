import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

const receiveGenres = genres => ({
  type: RECEIVE_GENRES,
  genres
})

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
})

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
})

export const fetchGenres = () => {
  return dispatch => {
    return TrackAPIUtil.fetchGenres()
      .then(genres => dispatch(receiveGenres(genres)));
  };
}

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