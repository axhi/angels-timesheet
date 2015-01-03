class AdminController < ApplicationController
  def sign_in
    user = User.find_by(code: params[:password])
    if user.nil?
      flash[:notice] = "User does not exist"
      redirect_to "/admin"
    elsif user.position == 0
      session[:current_user_code] = user.code
      redirect_to admin_panel_path
    else
      flash[:notice] = "You Don't have Access"
      redirect_to "/admin"
    end
  end

  def report
    if params[:user] == ""
      @data = User.where('position != 0 OR position IS NULL').eager_load(:time_entries).where("time_entries.date >= ? AND time_entries.date <= ?", Time.parse(params[:from]), Time.parse(params[:to]).tomorrow).order("time_entries.date DESC")
      render "admin/report"
    else
      @data = User.where(id: params[:user]).eager_load(:time_entries).where("time_entries.date >= ? AND time_entries.date <= ?", Time.parse(params[:from]), Time.parse(params[:to]).tomorrow).order("time_entries.date DESC")
      render "admin/report"
    end
  end

  def panel
    @users = User.where('position != 0 OR position IS NULL')
  end
end
