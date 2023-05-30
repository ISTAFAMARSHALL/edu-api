class Teacher < ApplicationRecord

    belongs_to :school
    has_many: classes
    has_many: students, through: :classes
end
