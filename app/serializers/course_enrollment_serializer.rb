class CourseEnrollmentSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :student_class
  belongs_to :student
  
end
