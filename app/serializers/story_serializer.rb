class StorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :prompt
  has_one :user
end
