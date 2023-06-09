class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :email, :birthday

  belongs_to :user
  belongs_to :school
  
  has_many :course_enrollments
  has_many :student_classes, through: :course_enrollment
  
end
