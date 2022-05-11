class SessionsController < ApplicationController

    def create
        user = User.find_by_email(params:[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id #line responsible for signing someone in 
            render json: user, status: :accepted
        else
            render json: (errors: "Not Authorized"), status: :unauthorized
       end
    end

    def destroy
    end
end
