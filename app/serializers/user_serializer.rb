class UserSerializer #< ActiveModel::Serializer
  include JSONAPI::Serializer

  attributes :id, :username, :first_name, :last_name, :email, :prompts
  has_many :stories 
  has_many :prompts
end
