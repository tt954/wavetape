json.extract! user, :id, :email, :username, :followee_ids, :follower_ids
json.avatarUrl url_for(user.avatar) if user.avatar.attached?
json.headerUrl url_for(user.header) if user.header.attached?