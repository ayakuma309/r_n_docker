class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.boolean :is_completed, null: false, default: false
      t.integer :priority, null: false, default: 0
      t.timestamps
    end
  end
end
