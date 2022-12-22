import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

const getVehiclesData = () => {
  return axios.get(`${API_URL}/vehicles`).then((response) => response.data);
};

const getVehicleData = ({ id }) => {
  return axios
    .get(`${API_URL}/vehicles/${id}`)
    .then((response) => response.data);
};

const vehicleLookupByVin = (vin) => {
  return axios
    .get(`${API_URL}/external`, {
      params: {
        vin,
      },
    })
    .then(({ data }) => {
      const vehicle = {
        year: data["Model Year"],
        make: data.Make,
        model: data.Model,
        trim: data.Trim,
      };
      return vehicle;
    });
};

const createCheckIn = (data) => {
  return axios
    .post(`${API_URL}/vehicles`)
    .then((response) => console.log("response", response));
};

export { getVehiclesData, getVehicleData, vehicleLookupByVin, createCheckIn };
