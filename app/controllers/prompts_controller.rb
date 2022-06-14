class PromptsController < ApplicationController
    skip_before_action :authorized!, only: [:index]
    before_action :find_prompt, only: [:show, :update, :destroy]

    def index #get "/prompts" 
        render json: PromptSerializer.new(Prompt.preload(:stories)).serializable_hash
    end

    def show #get "/prompts/:id"
        find_prompt
        render json: serialized_prompt
    end

    # def create #post "/prompts"
    #     user = User.find(params[:user_id])
    #     @prompt = user.prompts.create!(prompt_params)
    #     render json: serialized_prompt, status: 200
    # end
    # def create #post "prompts/:prompt_id/stories" 
    #     if params[:user_id]
    #         prompt = Prompt.find(params[:prompt_id])
    #         @prompt = current_user.prompts.create!(story_params)
    #         #if @prompt.id
    #         render json: serialized_story, status: 201
    #         # else
    #         #     render json: {error: @prompt.errors.full_messages.to_sentence}
    #         # end
    #     end
    # end

    def create 
        prompt = Prompt.create!(prompt_params)
        render json: PromptSerializer.new(prompt), status: :created
      end

    def update #patch "/prompts/:id"
        if current_user.prompts.include?(@prompt)
            @prompt&.update!(prompt_params)
            render json: serialized_prompt
        else
            no_route
        end
        # else
        #     render json: {error: @prompt.errors.full_messages.to_sentence}
        # end
    end

    # I have this here but I don't want prompts to be deleted right now because any user can write stories for a prompt
    
    # def destroy #delete "/prompts/:id"
    #     if current_user.prompts.include?(@prompt)
    #         if @prompt&.destroy
    #             render json: {message: "Successfully deleted prompt!"}
    #         else
    #             render json: {error: @prompt.errors.full_messages.to_sentence}
    #         end
    #     else
    #         no_route
    #     end
    # end

    private

    def find_prompt
        @prompt = Prompt.find(params[:id])
    end

    def serialized_prompt
        @prompt.to_json(include: :stories)
    end

    def prompt_params
        params.permit(:prompt_title, :prompt_body)
    end
end