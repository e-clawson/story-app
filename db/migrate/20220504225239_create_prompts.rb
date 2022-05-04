class CreatePrompts < ActiveRecord::Migration[6.1]
  def change
    create_table :prompts do |t|
      t.string :prompt_title
      t.string :prompt_body

      t.timestamps
    end
  end
end
