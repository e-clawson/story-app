class SessionsController < ApplicationController
    skip_before_action :authorized!, only: [:create]

    def create
        user = User.find_by_email(params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id #line responsible for signing someone in 
            render json: UserSerializer.new(user), status: :accepted
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
       end
    end

    def destroy
        session.delete(:user_id)
        head :no_content 
    end
end
