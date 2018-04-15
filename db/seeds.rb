# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Link.destroy_all
Link.create!(long_link: "https://react-etc.net/entry/rip-redux-dan-abramov-announces-future-fetcher", short_link: "https://semashort.herokuapp.com/#/a", visits: 5000)
Link.create!(long_link: "http://www.atpworldtour.com/en/players/roger-federer/f324/fedex-atp-win-loss", short_link: "https://semashort.herokuapp.com/#/b", visits: 5)
Link.create!(long_link: "https://stackoverflow.com/questions/49844890/styled-components-nesting-and-referring-to-other-components-at-the-same-time", short_link: "https://semashort.herokuapp.com/#/c", visits: 2)
