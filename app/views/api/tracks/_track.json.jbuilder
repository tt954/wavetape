json.extract! track, :id, :title, :description, :uploader_id, :genre_id
json.photoUrl url_for(track.photo) if track.photo.attached?
json.trackUrl url_for(track.track) if track.track.attached?

