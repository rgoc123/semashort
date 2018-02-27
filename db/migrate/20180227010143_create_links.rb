class CreateLinks < ActiveRecord::Migration[5.1]
  def change
    create_table :links do |t|
      t.string :long_link, null: false
      t.string :short_link, null: false
      t.integer :visits

      t.timestamps
    end

    add_index :links, :long_link
    add_index :links, :short_link, unique: true
  end
end
