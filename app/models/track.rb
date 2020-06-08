class Track < ApplicationRecord

  validates :title, presence: true, uniqueness: { scope: :uploader_id }
  validates :uploader_id, presence: true

  belongs_to :uploader, 
    foreign_key: :uploader_id, 
    class_name: 'User'

  belongs_to :genre, 
    foreign_key: :genre_id, 
    class_name: 'Genre'

  has_one_attached :photo
  has_one_attached :track

end
