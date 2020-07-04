json.extract! user, :id, :email, :username, :track_ids, :followee_ids, :follower_ids
json.avatarUrl url_for(user.avatar) if user.avatar.attached?
json.headerUrl url_for(user.header) if user.header.attached?