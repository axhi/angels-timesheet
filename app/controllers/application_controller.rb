class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  protected

  def user_signed_in?
    session[:current_user_code] != nil
  end

  def format_date(date)
    #DateTime.parse(date).strftime("%D")
    date.strftime("%D")
  end

  def format_time(time)
    if time.nil?
      "still clocked in"
    else
      time.strftime("%l:%M %P")
      #DateTime.parse(time).strftime("%l:%M %P")
    end
  end

  def get_hours(times)
    hours = 0
    times.each do |entry|
      unless entry.clock_out.nil?
        a = Time.diff(entry.clock_in, entry.clock_out)
        hours += a[:hour].to_i + a[:minute]/60.0 
      end
    end
    @time = hours.round(2)
  end

  def get_tips(wage)
    ((8.0 - wage) * @time).round
  end
  
  helper_method :get_tips
  helper_method :get_hours
  helper_method :format_time
  helper_method :format_date
  helper_method :user_signed_in?
end
