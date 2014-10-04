class AddWageToUser < ActiveRecord::Migration
  def change
    add_column :users, :wage, :float
  end
end
