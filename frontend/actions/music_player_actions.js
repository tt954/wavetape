export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const RECEIVE_SELECTED_TRACK = 'RECEIVE_SELECTED_TRACK';

export const togglePlay = () => ({
  type: TOGGLE_PLAY,
})

export const receiveSelectedTrack = selectedTrack => ({
  type: RECEIVE_SELECTED_TRACK,
  selectedTrack,
})

