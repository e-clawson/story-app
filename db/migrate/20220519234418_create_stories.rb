class CreateStories < ActiveRecord::Migration[6.1]
  def change
    create_table :stories do |t|
      t.references :prompt, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :story_title
      t.string :story_body

      t.timestamps
    end
  end
end
