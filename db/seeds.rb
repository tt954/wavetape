# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Follow.destroy_all
User.destroy_all

u1 = User.create!({email: "tt@demo.com", password: "strawberries", username: "demo"})
u2 = User.create!({email: "redvelvet@wt.com", password: "strawberries", username: "Red Velvel"})
u3 = User.create!({email: "emberisland@demo.com", password: "strawberries", username: "ember island"})

Follow.create!({followee_id: u2.id, follower_id: u1.id})
Follow.create!({followee_id: u3.id, follower_id: u1.id})
Follow.create!({followee_id: u2.id, follower_id: u3.id})


