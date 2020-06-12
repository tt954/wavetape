# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Track.destroy_all
Follow.destroy_all
User.destroy_all

u1 = User.create!({email: "tt@demo.com", password: "strawberries", username: "demo"})
u2 = User.create!({email: "redvelvet@wt.com", password: "blueberries", username: "Red Velvet"})
u3 = User.create!({email: "emberisland@wt.com", password: "blueberries", username: "ember island"})
u4 = User.create!({email: "muramasa@wt.com", password: "blueberries", username: "Mura Masa"})
u5 = User.create!({email: "frankocean@wt.com", password: "blueberries", username: "frank"})
u6 = User.create!({email: "jcole@wt.com", password: "blueberries", username: "J. Cole"})
u7 = User.create!({email: "billie@wt.com", password: "blueberries", username: "Billie Eilish"})
u8 = User.create!({email: "alinabaraz@wt.com", password: "blueberries", username: "Alina Baraz"})
u9 = User.create!({email: "troyboi@wt.com", password: "blueberries", username: "TroyBoi"})
u10 = User.create!({email: "blyne@wt.com", password: "blueberries", username: "BLYNE"})
u11 = User.create!({email: "kehlani@wt.com", password: "blueberries", username: "Kehlani"})
u12 = User.create!({email: "brockhampton@wt.com", password: "blueberries", username: "BROCKHAMPTON"})

u1_avatar = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/demo.jpg")
u1.avatar.attach(io: u1_avatar, filename: 'u1_avatar.jpg')

u2_avatar = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/velvet.jpg")
u2.avatar.attach(io: u2_avatar, filename: 'u2_avatar.jpg')

u3_avatar = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/ember.jpeg")
u3.avatar.attach(io: u3_avatar, filename: 'u3_avatar.jpg')

u4_avatar = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/mura.jpg")
u4.avatar.attach(io: u4_avatar, filename: 'u4_avatar.jpg')

u5_avatar = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/frank.jpg")
u5.avatar.attach(io: u5_avatar, filename: 'u5_avatar.jpg')

u6_avatar = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/jcole.jpg")
u6.avatar.attach(io: u6_avatar, filename: 'u6_avatar.jpg')

u7_avatar = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/billie.jpg")
u7.avatar.attach(io: u7_avatar, filename: 'u7_avatar.jpg')

u8_avatar = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/alina.jpeg")
u8.avatar.attach(io: u8_avatar, filename: 'u8_avatar.jpg')

u9_avatar = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/troyboi.jpg")
u9.avatar.attach(io: u9_avatar, filename: 'u9_avatar.jpg')

u10_avatar = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/blyne.jpg")
u10.avatar.attach(io: u10_avatar, filename: 'u10_avatar.jpg')

u11_avatar = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/kehlani.jpg")
u11.avatar.attach(io: u11_avatar, filename: 'u11_avatar.jpg')

u12_avatar = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/brockhampton.jpg")
u12.avatar.attach(io: u12_avatar, filename: 'u12_avatar.jpg')

Follow.create!({followee_id: u9.id, follower_id: u1.id})
Follow.create!({followee_id: u3.id, follower_id: u1.id})
Follow.create!({followee_id: u4.id, follower_id: u1.id})
Follow.create!({followee_id: u6.id, follower_id: u1.id})
Follow.create!({followee_id: u2.id, follower_id: u3.id})
Follow.create!({followee_id: u7.id, follower_id: u3.id})
Follow.create!({followee_id: u5.id, follower_id: u4.id})

t1 = Track.create!({title: "Floating World", uploader_id: u1.id, genre: "Ambient"})
t1_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t1-floating-world-henrik-donnestad.jpg")
t1_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t1-floating_world.mp3")
t1.photo.attach(io: t1_photo, filename: 't1_photo.jpg')
t1.track.attach(io: t1_track, filename: 't1_track.mp3')

t2 = Track.create!({title: "Moon River", uploader_id: u5.id, genre: "Pop"})
t2_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t2.jpeg")
t2_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t2-moon_river-frank_ocean.mp3")
t2.photo.attach(io: t2_photo, filename: 't2_photo.jpg')
t2.track.attach(io: t2_track, filename: 't2_track.mp3')

t3 = Track.create!({title: "Miss You", uploader_id: u4.id, genre: "Electronic"})
t3_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t3.jpg")
t3_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t3-miss_you-mura_masa.mp3")
t3.photo.attach(io: t3_photo, filename: 't3_photo.jpg')
t3.track.attach(io: t3_track, filename: 't3_track.mp3')

t4 = Track.create!({title: "Water", uploader_id: u10.id, genre: "Dance & EDM"})
t4_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t4.jpg")
t4_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t4-water-blyne.mp3")
t4.photo.attach(io: t4_photo, filename: 't4_photo.jpg')
t4.track.attach(io: t4_track, filename: 't4_track.mp3')

t5 = Track.create!({title: "Wavey", description: "a poolside deephouse track", uploader_id: u9.id, genre: "Trap"})
t5_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t5.jpg")
t5_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t5-wavey-troyboi.mp3")
t5.photo.attach(io: t5_photo, filename: 't5_photo.jpg')
t5.track.attach(io: t5_track, filename: 't5_track.mp3')

t6 = Track.create!({title: "She's Mine Pt. 2", uploader_id: u6.id, genre: "Hip-hop & Rap"})
t6_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t8.jpg")
t6_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t8-She's+Mine+Pt.+2-J.+Cole.mp3")
t6.photo.attach(io: t6_photo, filename: 't6_photo.jpg')
t6.track.attach(io: t6_track, filename: 't6_track.mp3')

t7 = Track.create!({title: "Ocean Eyes", uploader_id: u7.id, genre: "Indie"})
t7_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t6.jpeg")
t7_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t6-ocean_eyes-bille_eilish.mp3")
t7.photo.attach(io: t7_photo, filename: 't7_photo.jpg')
t7.track.attach(io: t7_track, filename: 't7_track.mp3')

t8 = Track.create!({title: "Drift", uploader_id: u8.id, genre: "Electronic"})
t8_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t7.jpg")
t8_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t7-Drift-Alina+Baraz+%26+Galimatias.mp3")
t8.photo.attach(io: t8_photo, filename: 't8_photo.jpg')
t8.track.attach(io: t8_track, filename: 't8_track.mp3')

t9 = Track.create!({title: "Water", description: "From It Was Good Until It Wasn’t", uploader_id: u11.id, genre: "R&B & Soul"})
t9_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t9.jpg")
t9_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t9-water-Kehlani.mp3")
t9.photo.attach(io: t9_photo, filename: 't9_photo.jpg')
t9.track.attach(io: t9_track, filename: 't9_track.mp3')

t10 = Track.create!({title: "Bad Boy", description: "hip hop-based R&B song with a synth melody and a heavy bass sound", uploader_id: u2.id, genre: "Dance & EDM"})
t10_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t13.jpg")
t10_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t13-bad_boy-red_velvet.mp3")
t10.photo.attach(io: t10_photo, filename: 't10_photo.jpg')
t10.track.attach(io: t10_track, filename: 't10_track.mp3')

t11 = Track.create!({title: "Umbrella", uploader_id: u3.id, genre: "Electronic"})
t11_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t12.jpg")
t11_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t12-Umbrella-Ember+Island.mp3")
t11.photo.attach(io: t11_photo, filename: 't11_photo.jpg')
t11.track.attach(io: t11_track, filename: 't11_track.mp3')

t12 = Track.create!({title: "ZIPPER", uploader_id: u12.id, genre: "Hip-hop & Rap"})
t12_photo = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t10.png")
t12_track = open("https://wavetape-seeds.s3.us-east-2.amazonaws.com/t10-brockhampton-ZIPPER.mp3")
t12.photo.attach(io: t12_photo, filename: 't12_photo.png')
t12.track.attach(io: t12_track, filename: 't12_track.mp3')
