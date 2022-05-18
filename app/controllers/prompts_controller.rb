class PromptsController < ApplicationController
    skip_before_action :authorized!, only: [:index]
    before_action :find_post, only: [:show, :update, :destroy]

    def index #get "/prompts"
        binding.pry 
        render json: PromptSerializer.new(Prompt.preload(:stories)).serializable_hash
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
