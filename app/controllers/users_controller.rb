class UsersController < ApplicationController
  skip_before_action :authorized!, only: [:create]

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: UserSerializer.new(user), status: :created
  end

  def show #"/me"
    render json: UserSerializer.new(@current_user), status: :ok
  end

  private

  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end

end
