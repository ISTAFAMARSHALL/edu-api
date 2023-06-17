class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|

      t.string :auth_level

      t.string :full_name
      t.string :uid
      t.string :avatar_url
      t.string :provider

      t.timestamps

    end
  end
end
