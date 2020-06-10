# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Track.destroy_all
Genre.destroy_all
Follow.destroy_all
User.destroy_all

u1 = User.create!({email: "tt@demo.com", password: "strawberries", username: "demo"})
u2 = User.create!({email: "redvelvet@wt.com", password: "blueberries", username: "Red Velvet"})
u3 = User.create!({email: "emberisland@wt.com", password: "blueberries", username: "ember island"})
u4 = User.create!({email: "muramasa@wt.com", password: "blueberries", username: "Mura Masa"})
u5 = User.create!({email: "frankocean@wt.com", password: "blueberries", username: "frank"})

Follow.create!({followee_id: u2.id, follower_id: u1.id})
Follow.create!({followee_id: u3.id, follower_id: u1.id})
Follow.create!({followee_id: u4.id, follower_id: u1.id})
Follow.create!({followee_id: u2.id, follower_id: u3.id})
Follow.create!({followee_id: u5.id, follower_id: u4.id})

genres = ["Ambient", "Classical", "Country", "Dance & EDM", "Hip-hop & Rap", "House", "Jazz & Blues", "Latin,", "Pop", "R&B & Soul", "Rock", "Soundtrack"]
genres.each { |genre| Genre.create!({genre: genre}) }  

t1 = Track.create!({title: "Floating World", uploader_id: u1.id, genre_id: 1})
t1_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t1-floating-world-henrik-donnestad.jpg")
t1_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t1-floating_world.mp3")
t1.photo.attach(io: t1_photo, filename: 't1_photo.jpg')
t1.track.attach(io: t1_track, filename: 't1_track.mp3')

t2 = Track.create!({title: "Moon River", uploader_id: u5.id, genre_id: 9})
t2_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t2.jpeg")
t2_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t2-moon_river-frank_ocean.mp3")
t2.photo.attach(io: t2_photo, filename: 't2_photo.jpg')
t2.track.attach(io: t2_track, filename: 't2_track.mp3')

t3 = Track.create!({title: "Miss You", uploader_id: u4.id, genre_id: 4})
t3_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t3.jpg")
t3_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t3-miss_you-mura_masa.mp3")
t3.photo.attach(io: t3_photo, filename: 't3_photo.jpg')
t3.track.attach(io: t3_track, filename: 't3_track.mp3')

t4 = Track.create!({title: "Water", uploader_id: u1.id, genre_id: 4})
t4_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t4.jpg")
t4_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t4-water-blyne.mp3")
t4.photo.attach(io: t4_photo, filename: 't4_photo.jpg')
t4.track.attach(io: t4_track, filename: 't4_track.mp3')

t5 = Track.create!({title: "Wavey", uploader_id: u1.id, genre_id: 4})
t5_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t5.jpg")
t5_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t5-wavey-troyboi.mp3")
t5.photo.attach(io: t5_photo, filename: 't5_photo.jpg')
t5.track.attach(io: t5_track, filename: 't5_track.mp3')

t6 = Track.create!({title: "She's Mine Pt. 2", uploader_id: u1.id, genre_id: 10})
t6_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t8.jpg")
t6_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t8-She's+Mine+Pt.+2-J.+Cole.mp3")
t6.photo.attach(io: t6_photo, filename: 't6_photo.jpg')
t6.track.attach(io: t6_track, filename: 't6_track.mp3')
