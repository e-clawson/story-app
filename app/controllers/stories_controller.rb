class StoriesController < ApplicationController
    skip_before_action :authorized!, only: [:index]
    before_action :find_prompt, only: [:show, :update, :destroy]

    def show #get "/stories/:id"
        render json: serialized_story
    end

    def create #post "/stories" 
        @prompt = current_user.stories.create!(story_params)
        if @story.id
        render json: serialized_story, status: 201
        else
            render json: {error: @story.errors.full_messages.to_sentence}
        end
    end

    def update #patch "/stories/:id"
        if current_user.stories.include?(@story)
            @story&.update!(story_params)
            render json: serialized_story
        else
            no_route
        end
        # else
        #     render json: {error: @post.errors.full_messages.to_sentence}
        # end
    end

        def destroy #delete "/stories/:id"
        if current_user.stories.include?(@story)
            if @story&.destroy
                render json: {message: "Successfully deleted story!"}
            else
                render json: {error: @story.errors.full_messages.to_sentence}
            end
        else
            no_route
        end

        private 

        def find_story
            @story = Story.find(params[:id])
        end
    
        def serialized_story
            @story.to_json #should I include anything else here? (prompt id?)
        end
    
        def story_params
            params.require(:story).permit(:story_title, :story_body, :user_id, :prompt_id)
        end

    end

end
