class Student < ApplicationRecord

    belongs_to :user
    belongs_to :school
    
    has_many :student_classes
    has_many :teachers, through: :student_classes

end
