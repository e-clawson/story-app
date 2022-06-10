class Prompt < ApplicationRecord
    #associations 
    has_many :stories 

    validates :prompt_title, presence: true
    validates :prompt_body, length: {in: (1..500)}
end
