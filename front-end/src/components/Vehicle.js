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
      <div className="flex justify-end my-5">
        <Link to={`/`}>
          <button className="btn btn-primary gap-2">
            <ArrowLeftIcon className="w-5 h-5" /> Return to Vehicles List
          </button>
        </Link>
      </div>
      <div className="divider"></div>
      <h1 className="text-3xl font-bold">{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Vehicle</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <tbody>
                <tr>
                  <th>VIN</th>
                  <td>{vehicle.vin}</td>
                </tr>
                <tr>
                  <th>Year</th>
                  <td>{vehicle.year}</td>
                </tr>
                <tr>
                  <th>Make</th>
                  <td>{vehicle.make}</td>
                </tr>
                <tr>
                  <th>Model</th>
                  <td>{vehicle.model}</td>
                </tr>
                <tr>
                  <th>Trim</th>
                  <td>{vehicle.trim}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Owner</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{vehicle.owner}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{vehicle.owner_address}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{vehicle.owner_phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Facility</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{vehicle.facility}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{vehicle.facility_address}</td>
                </tr>
                <tr>
                  <th>Parking Spot</th>
                  <td>{vehicle.facility_parking_spot}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card card-compact bg-success text-success-content shadow-xl h-auto">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">Status:</h2>
              <h2 className="card-title">
                {vehicle.check_out === "" ? "In" : "Out"}
              </h2>
            </div>
            <div className="divider m-0"></div>
            <div className="flex justify-between">
              <span>Checked In Time:</span>
              <span>{vehicle.check_in}</span>
            </div>
            <div className="flex justify-between">
              <span>Check In Attendant:</span>
              <span>{vehicle.check_in_attendant}</span>
            </div>
            {vehicle.check_out && (
              <>
                <div className="flex justify-between">
                  <span>Check Out Time:</span>
                  <span>{vehicle.check_out}</span>
                </div>
                <div className="flex justify-between">
                  <span>Check Out Attendant:</span>
                  <span>{vehicle.check_out_attendant}</span>
                </div>
              </>
            )}
            <div className="divider m-0"></div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-warning gap-2"
                onClick={() => destroyVehicleData()}
              >
                <ClockIcon className="w-5 h-5" /> Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
