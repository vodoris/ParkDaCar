import axios from "axios";

const APP_URL = "http://localhost:3000/api/v1";

const getVehiclesData = () => {
  return axios.get(`${APP_URL}/vehicles`).then((response) => response.data);
};

const getVehicleData = ({ id }) => {
  return axios
    .get(`${APP_URL}/vehicles/${id}`)
    .then((response) => response.data);
};

export { getVehiclesData, getVehicleData };
