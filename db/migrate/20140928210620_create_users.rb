class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :code
      t.string :first_name
      t.string :last_name
      t.integer :position

      t.timestamps
    end
  end
end
