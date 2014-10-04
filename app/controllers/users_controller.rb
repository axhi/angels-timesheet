class UsersController < ApplicationController
  respond_to :json, :html
  def create
    user = User.new(user_params) 
    if user.save
      render json: {success: true, user: user}
    else
      render json: {success: false, errors: user.errors.full_messages}
    end
  end  

  def edit
    user = User.find(params[:id])
    if user.update(user_params)
      puts user.wage
      render json: {success: true, user: user}
    else
      render json: {success: false, error: user.errors.full_messages}
    end
  end

  def delete
    User.find(params[:id]).destroy
    render json: {success: true, id: params[:id]}
  end

  def show
    user = User.find(params[:id])
    render json: {success: true, user: user}
  end
  
  def clock_in
    TimeEntry.create(user: User.find_by(code: params[:id]), date: DateTime.now)
    render json: {success: true}
  end

  def clock_out
    User.find_by(code: params[:id]).clock_out
    render json: {success: true}
  end

  def clock_status 
    user = User.find_by(code: params[:id])
    if user.nil?
      render json: {success: false}
    else
      render json: {clocked_in: user.is_clocked_in?, success: true, name: user.name}
    end
  end

  def user_params
    params.permit(:code, :first_name, :last_name, :position, :wage)
  end
end
