# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

10.times do |index|
    School.create!(name: Faker::Educator.unique.primary_school, address: Faker::Address.unique.full_address)
end

100.times do |index|
    Teacher.create!(name: Faker::Name.name, address: Faker::Address.unique.full_address, subject: Faker::Educator.subject, email: Faker::Internet.email, birthday: Faker::Date.birthday, school_id: rand(1..10), auth_level: "teacher" )
end

1000.times do |index|
    Student.create!(name: Faker::Name.name, address: Faker::Address.unique.full_address, email: Faker::Internet.email, birthday: Faker::Date.birthday, school_id: rand(1..10), auth_level: "student" )
end