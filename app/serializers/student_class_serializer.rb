class StudentClassSerializer < ActiveModel::Serializer
  attributes :id, :time

  # belongs_to :teacher

  attribute :students do 
    self.object.students
  end

  attribute :teacher do 
    self.object.teacher
  end

end
