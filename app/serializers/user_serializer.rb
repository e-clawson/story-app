class UserSerializer #< ActiveModel::Serializer
  include JSONAPI::Serializer

  attributes :id, :username, :first_name, :last_name, :email, :password_digest
end
