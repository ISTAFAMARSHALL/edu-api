class Student < ApplicationRecord

    belongs_to :user
    belongs_to :school
    
    has_many :enrollments
    has_many :student_classes, through: :enrollments

end
