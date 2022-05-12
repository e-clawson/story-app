class ApplicationController < ActionController::API
  # include ActionController::Serialization
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :no_route
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
  before_action :authorized!
  wrap_parameters format: [] #related to strong params and its ability to build a nested object in params

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id] #the ||= is memoization - stops the process from creating an infinite loop 
  end

  def authorzied! 
    no_route unless current_user
  end

  def invalid_record(invalid)
    redner json: {error: invalid.record.errors.full_messages.to_sentence}, status: :unprocessable_entity
  end
  
  def no_route
    render json: {error: "Not authorized"}, status: :unauthorized unless session.include?(:user_id)
  end

  # def authorize
  #   @current_user = User.find_by(id: session[:user_id])

  #   render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  # end
 
  # def render_unprocessable_entity_response(exception)
  #   render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  # end

end
