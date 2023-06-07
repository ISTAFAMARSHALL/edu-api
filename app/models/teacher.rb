class Teacher < ApplicationRecord

    belongs_to :school
    has_many :student_classes
    has_many :students, through: :student_classes
end
