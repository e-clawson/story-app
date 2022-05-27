class StorySerializer #< ActiveModel::Serializer
    include JSONAPI::Serializer
    attributes :story_title, :story_body, :id, :prompt_id, :user_id
    # belongs_to :prompt, serializer: PromptSerializer
    
end
