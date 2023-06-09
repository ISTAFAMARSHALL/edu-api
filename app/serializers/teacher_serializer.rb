class TeacherSerializer < ActiveModel::Serializer
  attributes :id ,:name, :address, :subject, :email, :birthday

  belongs_to :user
  belongs_to :school
  
  has_many :student_classes
  
end
