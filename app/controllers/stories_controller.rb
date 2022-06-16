class StoriesController < ApplicationController
    # skip_before_action :authorized!, only: [:index]
    before_action :find_story, only: [:show, :update, :destroy]

    def index #get "/stories" get "prompts/:prompt_id/stories"
        if params[:prompt_id] 
            prompt = Prompt.find(params[:prompt_id])
            render json: prompt.stories
        else # get "/stories"
            render json: StorySerializer.new(Story.all).serializable_hash
        end
    end

    def show #get "/stories/:id"
        @story = Stories.all
        render json: serialized_story
    end

    def create #post "prompts/:prompt_id/stories" 
        if params[:prompt_id]
            prompt = Prompt.find(params[:prompt_id])
            @story = current_user.stories.create!(story_params)
            #if @prompt.id
            render json: serialized_story, status: 201
            # else
            #     render json: {error: @prompt.errors.full_messages.to_sentence}
            # end
        end
    end

    def update #patch "/stories/:id"
        if @story&.update(story_params)
            render json: serialized_story
        # else
        #     no_route
        # end
        else
            render json: {error: @story.errors.full_messages.to_sentence}, status: 400
        end
    end

    def destroy #delete "/stories/:id"
        if @story&.destroy
            render json: {message: "Successfully deleted story!"}
        else
            render json: {error: @story.errors.full_messages.to_sentence}
        end
        # else
        #     no_route
    end

    private 

        def find_story
            @story = Story.find(params[:id])
        end
    
        def serialized_story
            @story.to_json(include: :prompt)
        end
    
        def story_params
            params.permit(:story_title, :story_body, :user_id, :prompt_id)
        end
end
