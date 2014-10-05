class TimeEntry < ActiveRecord::Base
  belongs_to :user
  before_save :timestamp
  scope :open_status, ->{where("clock_out IS NULL", true)}
  scope :closed, ->{where("clock_out IS NOT NULL", true)}

  def timestamp
    if clock_in.nil?
     self.update(clock_in: Time.zone.now, date: DateTime.now)
    end
  end

end
