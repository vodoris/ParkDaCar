class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.string :vin
      t.string :year
      t.string :model
      t.string :make
      t.string :trim
      t.string :owner
      t.string :owner_address
      t.string :owner_phone
      t.string :check_in
      t.string :check_in_attendant
      t.string :check_out
      t.string :check_out_attendant
      t.string :facility
      t.string :facility_address
      t.integer :facility_parking_spot

      t.timestamps
    end
  end
end
