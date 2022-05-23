class PromptsController < ApplicationController
    skip_before_action :authorized!, only: [:index]
    before_action :find_prompt, only: [:show, :update, :destroy]

    def index #get "/prompts" this one returns { data: []}
        render json: PromptSerializer.new(Prompt.preload(:stories)).serializable_hash
    end

    # def index #this one gives me "[]"
    #     render json: Prompt.all
    # end

    # I don't need these yet but might need them later

    # def ordered
    #     render json: Post.sort_desc_by_title
    # end

    # def most_stories
    #     render json: Prompt.most_stories
    # end

    def show #get "/prompts/:id"
        render json: serialized_prompt
    end

    def create #post "/prompts" "users/17/prompts" "users/99/prompts"
        @prompt = current_user.prompts.create!(prompt_params)
        #if @prompt.id
        render json: serialized_prompt, status: 201
        # else
        #     render json: {error: @prompt.errors.full_messages.to_sentence}
        # end
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

    def serialized_post
        @prompt.to_json(include: :stories)
    end

    def prompt_params
        params.require(:prompt).permit(:prompt_title, :prompt_body)
    end
end