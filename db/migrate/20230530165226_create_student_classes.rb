class CreateStudentClasses < ActiveRecord::Migration[7.0]
  def change
    create_table :student_classes do |t|
      t.string :time
      t.string :teacher_id

      t.timestamps
    end
  end
end
