class TimeEntriesController < ApplicationController
  def show
    t = TimeEntry.find(params[:id])
    render json: {success: true, entry: t}
  end

  def delete
    TimeEntry.find(params[:id]).destroy
    render json: {success: true, id: params[:id]}
  end

  def edit
    t = TimeEntry.find(params[:id])
    t.update(clock_in: Time.zone.parse(params[:clock_in]), clock_out: Time.zone.parse(params[:clock_out]), date: params[:date])
    render json: {success: true, entry: t}
  end

  def create
    user = User.find(params[:user])
    t = user.time_entries.create()
    t.update(date: params[:date], clock_in: Time.parse(params[:clock_in]), clock_out: Time.parse(params[:clock_out]))
    render json: {success: true, entry: t}      
  end

  def time_params
    params.permit(:clock_in, :clock_out, :date, :id)
  end
end
