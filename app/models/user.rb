class User < ApplicationRecord

    has_secure_password

    has_many :teachers
    has_many :students

    has_many :school, through: :teachers
    has_many :school, through: :students

    has_many :student_classes, through: :teachers
    has_many :course_enrollments, through: :students

end