class PromptSerializer #< ActiveModel::Serializer
  include JSONAPI::Serializer
  attributes :prompt_title, :prompt_body, :id, :stories
  has_many :stories, serializer: StorySerializer

  attribute :stories do |object|
    StorySerializer.new(object.stories)
  end
end
