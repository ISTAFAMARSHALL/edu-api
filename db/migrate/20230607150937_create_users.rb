class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|

      t.string :email
      t.string :password_digest
      t.string :password_confirmation
      t.string :auth_level
      t.string :image
      t.string :full_name
      t.string :uid
      t.string :avatar_url
      t.string :provider

      t.timestamps

    end
  end
end
