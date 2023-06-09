class CreateCourseEnrollments < ActiveRecord::Migration[7.0]
  def change
    create_table :course_enrollments do |t|
      t.string :student_class_id
      t.string :student_id
      t.timestamps
    end
  end
end
