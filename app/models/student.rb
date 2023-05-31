class Student < ApplicationRecord

    belongs_to :school
    has_many :classes
    has_many :teachers, through: :classes
end
