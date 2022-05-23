class StorySerializer #< ActiveModel::Serializer
    include JSONAPI::Serializer
    attributes :story_title, :story_body, :id, 
end
