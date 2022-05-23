class Prompt < ApplicationRecord
    #associations 
    has_many :stories #counter_cache: true # 17 methods comments, comments= 
    belongs_to :user

    validates :prompt_title, :prompt_body, presence: true
    validates :prompt_body, length: {in: (1..500)}
end
