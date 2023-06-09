class StudentClassSerializer < ActiveModel::Serializer
  attributes :id, :time

  belongs_to :teacher
    
  has_many :students
  
end
