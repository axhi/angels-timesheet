class CreateTimeEntries < ActiveRecord::Migration
  def change
    create_table :time_entries do |t|
      t.integer :user_id
      t.string :clock_in
      t.string :clock_out

      t.timestamps
    end
  end
end
