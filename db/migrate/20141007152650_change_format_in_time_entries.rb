class ChangeFormatInTimeEntries < ActiveRecord::Migration
  def change
    change_column :time_entries, :clock_in, 'timestamp USING CAST(clock_in AS timestamp)'
    change_column :time_entries, :clock_out, 'timestamp USING CAST(clock_out AS timestamp)'
  end
end
