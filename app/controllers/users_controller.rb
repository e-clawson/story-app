class UsersController < ApplicationController
  skip_before_action :authorized!, only: [:create ]

  def create 
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: UserSerializer.new(user), status: :created
  end

  def show #"/me"
    render json: UserSerializer.new(@current_user), status: :ok
  end

  def destroy #"/delete"
    if @current_user
      if @current_user&.destroy
          render json: {message: "User Successfully Destroyed"}
      else
          render json: {error: @post.errors.full_messages.to_sentence}
      end
    else
      no_route
    end
  end

  private

  def user_params
    params.permit(:username, :first_name, :last_name, :email, :password, :password_confirmation)
  end

end
