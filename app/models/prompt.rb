class Prompt < ApplicationRecord
    #associations 
    has_many :stories
    belongs_to :user

    validates :prompt_title, :prompt_body, presence: true
    validates :prompt_body, length: {in: (1..500)}
end
