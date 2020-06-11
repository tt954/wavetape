export const fetchTrack = trackId => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${trackId}`
  })
)

export const fetchTracks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tracks'
  })
)

export const trackUpload = track => (
  $.ajax({
    method: 'POST',
    url: '/api/tracks',
    data: { track }
  })
)