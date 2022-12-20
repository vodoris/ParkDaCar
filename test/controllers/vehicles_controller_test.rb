require "test_helper"

class VehiclesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @vehicle = vehicles(:one)
  end

  test "should get index" do
    get vehicles_url, as: :json
    assert_response :success
  end

  test "should create vehicle" do
    assert_difference("Vehicle.count") do
      post vehicles_url, params: { vehicle: { check_in: @vehicle.check_in, check_in_attendant: @vehicle.check_in_attendant, check_out: @vehicle.check_out, check_out_attendant: @vehicle.check_out_attendant, facility: @vehicle.facility, facility_address: @vehicle.facility_address, facility_parking_spot: @vehicle.facility_parking_spot, make: @vehicle.make, model: @vehicle.model, owner: @vehicle.owner, owner_address: @vehicle.owner_address, owner_phone: @vehicle.owner_phone, trim: @vehicle.trim, vin: @vehicle.vin, year: @vehicle.year } }, as: :json
    end

    assert_response :created
  end

  test "should show vehicle" do
    get vehicle_url(@vehicle), as: :json
    assert_response :success
  end

  test "should update vehicle" do
    patch vehicle_url(@vehicle), params: { vehicle: { check_in: @vehicle.check_in, check_in_attendant: @vehicle.check_in_attendant, check_out: @vehicle.check_out, check_out_attendant: @vehicle.check_out_attendant, facility: @vehicle.facility, facility_address: @vehicle.facility_address, facility_parking_spot: @vehicle.facility_parking_spot, make: @vehicle.make, model: @vehicle.model, owner: @vehicle.owner, owner_address: @vehicle.owner_address, owner_phone: @vehicle.owner_phone, trim: @vehicle.trim, vin: @vehicle.vin, year: @vehicle.year } }, as: :json
    assert_response :success
  end

  test "should destroy vehicle" do
    assert_difference("Vehicle.count", -1) do
      delete vehicle_url(@vehicle), as: :json
    end

    assert_response :no_content
  end
end
