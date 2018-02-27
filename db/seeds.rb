# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Link.destroy_all
Link.create!(long_link: "https://sema4genomics.com/", short_link: "test1", visits: 5000)
Link.create!(long_link: "google.com", short_link: "test2", visits: 2)
Link.create!(long_link: "facebook.com", short_link: "test3", visits: 3)
