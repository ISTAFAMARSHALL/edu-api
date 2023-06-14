class TeacherSerializer < ActiveModel::Serializer
  attributes :id ,:name, :address, :subject, :email, :birthday

  attribute :school do 
  self.object.school
  end
  
  has_many :student_classes
  
end
