import React from "react";
import { ArrowRightIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Vehicles = ({ vehicles }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-5xl font-bold">Vehicles List</h1>
        <Link to={`/vehicles/add`}>
          <button className="btn btn-primary">
            <PlusIcon className="w-5 h-5" /> Add Vehicle
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th>Trim</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => {
              return (
                <tr className="hover" key={vehicle.id}>
                  <th>{vehicle.vin}</th>
                  <td>{vehicle.year}</td>
                  <td>{vehicle.make}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.trim}</td>
                  <td>
                    <Link to={`/vehicles/${vehicle.id}`}>
                      <button className="btn btn-primary btn-circle">
                        <ArrowRightIcon className="w-5 h-5" />
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vehicles;
