class Genre < ApplicationRecord

  validates :genre, presence: true 

  has_many :tracks, 
    foreign_key: :genre_id,
    class_name: 'Track'
    
end
