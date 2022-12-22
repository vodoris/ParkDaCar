class Api::V1::ExternalController < ApplicationController
  before_action :set_vin

  def show
    response = HTTParty.get(
      "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/#{@vin}?format=json",
      headers: {
        "Content-Type": "application/json",
      }
    )
    if response.success?
      data = JSON.parse(response.body)
      vehicle_details = data["Results"].select { 
        |item| item["Variable"] == "Make" || 
        item["Variable"] == "Model" ||
        item["Variable"] == "Model Year" ||
        item["Variable"] == "Trim"
      }
      result = {}
      vehicle_details.map {
        |detail| result.merge!(detail["Variable"] => detail["Value"])
      }
      @vehicle = result
      # .map { 
      #   |item| result.merge!(item["Variable"] => item["Value"])
      # }
      render json: @vehicle
    else
      render json: { error: "An error occurred" }, status: :internal_server_error
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vin
      @vin = params[:vin]
    end

end
