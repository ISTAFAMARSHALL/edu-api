class Teacher < ApplicationRecord

    belongs_to :user
    belongs_to :school
    
    has_many :student_classes
    has_many :course_enrollments, through: :student_classes
    
end
