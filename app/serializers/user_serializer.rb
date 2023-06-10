class UserSerializer < ActiveModel::Serializer
  attributes :id , :email, :password_digest, :password_confirmation


  # attribute :students do 
  #   self.object.students
  # end

  # attribute :teachers do 
  #   self.object.teachers
  # end

  # attribute :student_classes do 
  #   self.object.student_classes
  # end

  # attribute :course_enrollments do 
  #   self.object.course_enrollments
  # end

  has_many :teachers
  has_many :students
  has_many :student_classes
  has_many :course_enrollments

end
