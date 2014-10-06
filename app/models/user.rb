class User < ActiveRecord::Base
  has_many :time_entries, dependent: :destroy
  validates :code, uniqueness: true

  def is_clocked_in?
    time_entries.open_status.count > 0
  end

  def clock_out
    time_entries.open_status.each{|ent| ent.update(clock_out: Time.zone.now)}
  end

  def current_hours
    h = time_entries.where(date: 1.month.ago..DateTime.now).closed
    hours = 0
    h.each do |entry|
      a = Time.diff(entry.clock_in, entry.clock_out)
      hours += a[:hour].to_i + a[:minute]/60.0 
    end
    hours.to_i
  end

  def name
    unless first_name.nil?
      "#{first_name} #{last_name[0]}."
    end
  end

end
