class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :bio
      t.string :major
      t.string :group, default: "member"
      t.string :position, default: ""

      t.timestamps
    end
  end
end
