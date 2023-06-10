class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :email, :birthday

  belongs_to :user
  belongs_to :school
  
  has_many :student_classes, serializer: StudentClassSummarySerializer
  
end