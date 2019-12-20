class CreateFormResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :form_responses do |t|
      t.string :name
      t.string :email
      t.text :comments

      t.timestamps
    end
  end
end
