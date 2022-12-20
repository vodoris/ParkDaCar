# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

vehicles = Vehicle.create([
  {
    vin: "SCBFR7ZA5CC072256",
    year: "2012",
    make: "BENTLEY",
    model: "CONTINENTAL",
    trim: "GT",
    owner: "Gilmore",
    owner_address: "123 Wizard Way",
    owner_phone: "123-456-7890",
    check_in: "11:00",
    check_in_attendant: "Grog Strongjaw",
    check_out: "",
    check_out_attendant: "",
    facility: "Cloud Top District",
    facility_address: "995 Emon Road",
    facility_parking_spot: 7,
  },
  {
    vin: "1N4AB41D0SC729128",
    year: "1995",
    model: "SENTRA",
    make: "NISSAN",
    trim: "N/A",
    owner: "Allura Vysoryn",
    owner_address: "662 Icewalk Road",
    owner_phone: "789-012-3456",
    check_in: "13:00",
    check_in_attendant: "Grog Strongjaw",
    check_out: "",
    check_out_attendant: "",
    facility: "Cloud Top District",
    facility_address: "995 Emon Road",
    facility_parking_spot: 8,
  }
])