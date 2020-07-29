json.extract! track, :id, :title, :description, :uploader_id, :genre
json.uploadedAt track.created_at
json.uploader track.uploader.username
json.uploaderFollowers track.uploader.follower_ids
json.uploaderTracks track.uploader.track_ids
json.uploaderAvatar url_for(track.uploader.avatar) if track.uploader.avatar.attached?
json.photoUrl url_for(track.photo) if track.photo.attached?
json.trackUrl url_for(track.track) if track.track.attached?

