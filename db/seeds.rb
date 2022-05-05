# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
liz = User.create(username: "ELizardBeth", first_name: "Liz", last_name: "Clawson", password:"123456", email: "emclawson1@gmail.com")
angel = User.create(username: "A_rob", first_name: "Angel", last_name: "Robiou", password:"123456", email: "angel@gmail.com")
caitlin = User.create(username: "CWBakes", first_name: "Caitlin", last_name: "Baker", password:"123456", email: "cwbaker80@gmail.com")
laksh = User.create(username: "LakshK3", first_name: "Laksh", last_name: "Khurana", password:"123456", email: "lakshkhurana3@gmail.com")
aiden = User.create(username: "Pandora's Bra", first_name: "Aiden", last_name: "Baker", password:"123456", email: "aiden@gmail.com")

Prompt.create(prompt_title: "The Mad Scientist"