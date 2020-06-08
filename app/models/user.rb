class User < ApplicationRecord

  validates :email, :username, :session_token, presence: true, uniqueness: true 
  validates :password_digest, presence: true 
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :in_follows,
    foreign_key: :followee_id,
    class_name: 'Follow'

  has_many :out_follows,
    foreign_key: :follower_id,
    class_name: 'Follow'

  has_many :followers,
    through: :in_follows,
    source: :follower

  has_many :followees,
    through: :out_follows,
    source: :followee

  has_many :tracks, 
    foreign_key: :uploader_id,
    class_name: 'Track'

  def self.find_by_credentials(email, pw)
    user = User.find_by(email: email)
    user && user.is_password?(pw) ? user : nil
  end 

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end 

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end 

  def ensure_session_token
    self.session_token ||= SecureRandom.base64(64)
  end 

  def reset_session_token!
    self.update!(session_token: SecureRandom.base64(64))
    self.session_token
  end 
  
end
