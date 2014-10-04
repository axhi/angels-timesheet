class AddDateToTimeEntries < ActiveRecord::Migration
  def change
    add_column :time_entries, :date, :datetime
  end
end
