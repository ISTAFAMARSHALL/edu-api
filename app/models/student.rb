class Student < ApplicationRecord

    belongs_to :user
    belongs_to :school
    
    has_many :course_enrollments
    has_many :student_classes, through: :course_enrollments

end
