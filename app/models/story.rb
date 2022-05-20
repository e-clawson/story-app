class Story < ApplicationRecord
  #associations
  belongs_to :prompt
  belongs_to :user

  #validations
  validates :story_title, :story_body, presence: true
  validates :story_body, length: {in: (1..5000)}
end
