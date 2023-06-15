# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


## Create Schools
10.times do |index|

    School.create!(name: Faker::Educator.unique.primary_school, address: Faker::Address.unique.full_address)
    
end

## Create Teachers
100.times do |index|
    
    name = Faker::Name.name;
    address = Faker::Address.unique.full_address;
    subject = Faker::Educator.subject;
    email = "teacher#{index + 1}";
    birthday = Faker::Date.birthday; 
    school_id = rand(1..10);
    auth_level = "teacher";
    password = "teacher#{index + 1}";

    teacher_user = User.create!(email: email, password: password, password_confirmation: password, auth_level: auth_level)
    teacher_user.teachers.create!(name: name, address: address, subject: subject, email: email, birthday: birthday, school_id: school_id)

end

## Create Students
1000.times do |index|

    name = Faker::Name.name;
    address = Faker::Address.unique.full_address;
    email = "student#{index + 1}";
    birthday = Faker::Date.birthday; 
    school_id = rand(1..10);
    auth_level = "student";
    password = "student#{index + 1}";
    
    student_user = User.create!(email: email, password: password, password_confirmation: password, auth_level: auth_level)
    student_user.students.create!(name: name, address: address, email: email, birthday: birthday, school_id: school_id)
    
end

## Create Classes and add Student to classes
School.all.each do |school|

    school.teachers.each do |teacher|

        #student count
        s_count = school.students.count

        #student count
        t_count = school.teachers.count

        #student to teacher average
        average_students_in_class = s_count / t_count

        #array of student ids
        all_students = school.students.ids

        #create student class
        studentClass = teacher.student_classes.create!(time: Faker::Time.backward(days: 5, period: :morning, format: :short))

        #add students to class
        average_students_in_class.times do
            student = all_students.shuffle.first
            selected_student = Student.find_by(id: student)
            # studentClass.students << selected_student

            CourseEnrollment.create(student_id: selected_student.id, student_class_id: studentClass.id)

        end
      
    end

end

1.times do |index|
    
    name = "Anthony";
    address = Faker::Address.unique.full_address;
    subject = "";
    email = "admin1";
    birthday = Faker::Date.birthday; 
    school_id = rand(1..10);
    auth_level = "admin";
    password = "admin1";

    teacher_user = User.create!(email: email, password: password, password_confirmation: password, auth_level: auth_level)
    teacher_user.teachers.create!(name: name, address: address, subject: subject, email: email, birthday: birthday, school_id: school_id)
    
end
