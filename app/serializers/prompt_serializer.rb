class PromptSerializer #< ActiveModel::Serializer
  include JSONAPI::Serializer
  attributes :prompt_title, :prompt_body
end
