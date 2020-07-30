export const fetchTrack = trackId => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${trackId}`,
  })
)

export const fetchTracks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tracks',
  })
)

export const createTrack = track => (
  $.ajax({
    method: 'POST',
    url: '/api/tracks',
    data: { track },
  })
)

export const updateTrack = (track, id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/tracks/${id}`,
    data: { track },
  })
)

export const destroyTrack = trackId => {
  $.ajax({
    method: 'DELETE',
    url: `/api/tracks/${trackId}`,
  })
}