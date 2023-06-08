class CreateTeachers < ActiveRecord::Migration[7.0]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :address
      t.string :subject
      t.string :email
      t.string :birthday
      t.string :school_id
      t.string :user_id
      t.string :auth_level

      t.timestamps
    end
  end
end
