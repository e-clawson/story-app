class UsersController < ApplicationController
  def create
    user = User.create(user_params)
    session[:user_id] = user.id
    render json: user 
  end

  private

  def user_params
    params.permit(:username, :email, :password)
  end


end
