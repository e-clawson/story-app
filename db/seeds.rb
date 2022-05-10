# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
liz = User.create(username: "ESlizardBeth", first_name: "Liz", last_name: "Clawson", password:"123456", email: "emclawson1@gmail.com")
angel = User.create(username: "A_rob", first_name: "Angel", last_name: "Robiou", password:"123456", email: "angel@gmail.com")
caitlin = User.create(username: "CWBakes", first_name: "Caitlin", last_name: "Baker", password:"123456", email: "cwbaker80@gmail.com")
laksh = User.create(username: "LakshK3", first_name: "Laksh", last_name: "Khurana", password:"123456", email: "lakshkhurana3@gmail.com")
aiden = User.create(username: "Pandora's Bra", first_name: "Aiden", last_name: "Baker", password:"123456", email: "aiden@gmail.com")

p1 = Prompt.create(prompt_title: "The Mad Scientist", prompt_body: "A mad scientist tries to find the key to eternal life but runs into some unexpected consequences.")
p2 = Prompt.create(prompt_title: "Furry Friends", prompt_body: "Two cats turn into humans who try to help their owner work but can’t figure out how to do anything because they’re cats.")
p3 = Prompt.create(prompt_title: "A Friendly Haunting", prompt_body: "A woman dies but isn't ready to go yet and haunts her friends instead")
p4 =Prompt.create(prompt_title: "Roboplanet", prompt_body: "Robots abandoned on a deserted planet create their own society.")
p5 = Prompt.create(prompt_title: "Cross-Culture", prompt_body: "A long distance relationship forms between two aliens from different parts of the universe and they face struggles and triumphs as they fall in love and try to blend their lives together.")
p6 = Prompt.create(prompt_title: "AI Love You", prompt_body: "Two forms of sentient AI fall in love.")
p7 = Prompt.create(prompt_title: "Spiders", prompt_body: "A day in your house from a spider's point of view")
p8 = Prompt.create(prompt_title: "Besties", prompt_body: "The grim reaper becomes best friends with an elderly woman whose soul was supposed to be collected.")
