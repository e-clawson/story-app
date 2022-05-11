class SessionsController < ApplicationController

    def create
        user = User.find_by_email(params:[:email])
        if user&.authenticate(params[:password])
            binding.pry
        else
            binding.pry  
       end
    end

    def destroy
    end
end
