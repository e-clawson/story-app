class PromptsController < ApplicationController
    skip_before_action :authorized!, only: [:index, :search]
    before_action :find_prompt, only: [:show, :update, :destroy]

    def index #get "/prompts" 
        render json: PromptSerializer.new(Prompt.preload(:stories)).serializable_hash
    end

    def show #get "/prompts/:id"
        find_prompt
        render json: serialized_prompt
    end

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

    def search 
        @prompt = Prompt.where("lower(prompt_title) LIKE (?)", "%#{params[:prompt_title].downcase}%")
        render json: @prompt
    end 

        # def ordered_stories
    #    prompt = find_prompt
    #    ordered_stories = prompt.stories.order(:story_title)
    #    render json: serialized_prompt
    # end
    
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

    # def ordered
    #     render json: Post.sort_desc_by_title
    # end

    # def most_stories
    #     render json: Prompt.most_stories
    # end

    # def show #get "/posts/:id"
    #     render json: serialized_post
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