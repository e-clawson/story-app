class User < ApplicationRecord
    #associations 
    has_many :stories
    has_many :prompts, through: :stories

    #password protection - password_digest
    has_secure_password

    # validations
    validates :username, uniqueness: true, presence: true, length: {in: 4..25}
    validates :email, presence: true, uniqueness: true, format: {with: /\A(?<username>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}
    validates :password, length: {in: 6..25}
end
