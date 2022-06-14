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

  # def index # "users/:id/stories"
  #   @current_user = User.find_by_id(user_params)
  #   @current_user.stories
  #   render json: UserSerializer.new(@current_user), status: :ok 
    
  # end

  def index #get "users/:user_id/stories"
    if params[:user_id] 
      user = User.find(params[:user_id])
      render json: User.stories
    else
      render json: {error: @post.errors.full_messages.to_sentence}
    end
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
