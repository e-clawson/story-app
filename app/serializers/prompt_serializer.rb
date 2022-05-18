class PromptSerializer #< ActiveModel::Serializer
  include JSONAPI::Serializer
  attributes :id, :prompt_title, :prompt_body
end
