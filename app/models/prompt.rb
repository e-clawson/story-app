class Prompt < ApplicationRecord
    #associations 
    has_many :stories
    belongs_to :users, through: :stories

    validates :prompt_title, :prompt_body, presence: true
    validates :prompt_body, length: {in: (1..500)}
end
