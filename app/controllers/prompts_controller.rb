class PromptsController < ApplicationController
    skip_before_action :authorized!, only: [:index]
    before_action :find_post, only: [:show, :update, :destroy]

    def index #get "/prompts"
        prompts = Prompt.all
        render json: PromptSerializer.new(prompts), status: :ok
    end

    def ordered 
        render json: Prompt.sort_by_title
    end

    def most_stories
        render json: Prompt.most_stories
    end 

    def show #get "/posts/:id"
        render json: serialized_prompts
    end

    def create #prompt "/prompts" "users/:id/posts"
         
    end
end
