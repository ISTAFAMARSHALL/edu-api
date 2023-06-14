class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :email, :birthday


  attribute :school do 
  self.object.school
  end
  
  has_many :student_classes, serializer: StudentClassSummarySerializer
  
end
