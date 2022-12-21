import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon, ClockIcon } from "@heroicons/react/24/solid";

import { getVehicleData } from "../services/vehicles.service";

const Vehicle = () => {
  let { id } = useParams();
  const [vehicle, setVehicle] = useState([]);

  const destroyVehicleData = () => {
    console.log("exterminate");
  };

  useEffect(() => {
    let mounted = true;

    getVehicleData({ id }).then((record) => {
      if (mounted) {
        setVehicle(record);
      }
    });

    return () => (mounted = false);
  }, [id]);

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</h1>

        <button
          className="btn btn-warning gap-2"
          onClick={() => destroyVehicleData()}
        >
          <ClockIcon className="w-5 h-5" /> Check Out
        </button>
      </div>
      <div className="divider"></div>
      <div class="card bg-success text-success-content">
        <div class="card-body">
          <div className="flex justify-between">
            <span>Status:</span>
            <span>{vehicle.check_out === "" ? "In" : "Out"}</span>
          </div>
          <div className="flex justify-between">
            <span>Checked In:</span>
            <span>{vehicle.check_in}</span>
          </div>
          <div className="flex justify-between">
            <span>Attendant:</span>
            <span>{vehicle.check_in_attendant}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
        <div class="card bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">Vehicle</h2>
            <div className="flex justify-between">
              <span>VIN:</span>
              <span>{vehicle.vin}</span>
            </div>
            <div className="flex justify-between">
              <span>Year:</span>
              <span>{vehicle.year}</span>
            </div>
            <div className="flex justify-between">
              <span>Make:</span>
              <span>{vehicle.make}</span>
            </div>
          </div>
        </div>
        <div class="card bg-secondary text-secondary-content">
          <div class="card-body">
            <h2 class="card-title">Owner</h2>
            <div className="flex justify-between">
              <span>Name:</span>
              <span>{vehicle.owner}</span>
            </div>
            <div className="flex justify-between">
              <span>Address:</span>
              <span>{vehicle.owner_address}</span>
            </div>
            <div className="flex justify-between">
              <span>Phone Number:</span>
              <span>{vehicle.owner_phone}</span>
            </div>
          </div>
        </div>
        <div class="card bg-info text-info-content">
          <div class="card-body">
            <h2 class="card-title">Facility</h2>
            <div className="flex justify-between">
              <span>Name:</span>
              <span>{vehicle.facility}</span>
            </div>
            <div className="flex justify-between">
              <span>Address:</span>
              <span>{vehicle.facility_address}</span>
            </div>
            <div className="flex justify-between">
              <span>Parking Spot:</span>
              <span>{vehicle.facility_parking_spot}</span>
            </div>
          </div>
        </div>
      </div>

      <Link to={`/`}>
        <button className="btn btn-primary btn-link gap-2">
          <ArrowLeftIcon className="w-5 h-5" /> Return to Vehicles List
        </button>
      </Link>
      {JSON.stringify(vehicle)}
    </div>
  );
};

export default Vehicle;
