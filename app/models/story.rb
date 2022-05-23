class Story < ApplicationRecord
  #associations
  belongs_to :prompt
  belongs_to :user

  #validations
  validates :story_title, presence: true
  validates :story_body, presence: true, length: {in: (1..5000)}
end
