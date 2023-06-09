class CourseEnrollment < ApplicationRecord
    belongs_to :student_class
    belongs_to :student
end
