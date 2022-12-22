import { useState } from "react";
import moment from "moment";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import {
  vehicleLookupByVin,
  createCheckIn,
} from "../services/vehicles.service";
import Loading from "./Loading";
import OwnerDetails from "./OwnerDetails";
import FacilityDetails from "./FacilityDetails";

const Add = () => {
  const [vin, setVin] = useState("");
  const [vehicle, setVehicle] = useState(null);
  const [owner, setOwner] = useState(null);
  const [facility, setFacility] = useState(null);
  const [attendant, setAttendant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleOnChange = (event) => {
    event.preventDefault();
    setVin(event.target.value);
    setVehicle(null);
    setOwner(null);
    setFacility(null);
    setActiveStep(0);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await vehicleLookupByVin(vin);
      setVehicle(result);
      setActiveStep(1);
    } catch (e) {
      console.error("Result could not be found.");
    } finally {
      setLoading(false);
    }
  };

  const handleAttendantChange = (event) => {
    event.preventDefault();
    setAttendant(event.target.value);
  };

  const steps = [
    "Search VIN",
    "Review and Confirm Vehicle",
    "Add Owner Details",
    "Add Facility Details",
    "Check In Vehicle",
  ];

  const confirm = async () => {
    setLoading(true);
    try {
      await createCheckIn({
        vehicle: {
          vin: vin,
          ...vehicle,
          ...owner,
          ...facility,
          check_in: moment().format("HH:mm"),
          check_in_attendant: attendant,
        },
      });
    } catch (e) {
      console.error("Vehicle failed to be added.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold">Add New Vehicle</h1>
      <div className="flex justify-end my-5">
        <Link to={`/`}>
          <button className="btn btn-primary btn-accent gap-2">
            <ArrowLeftIcon className="w-5 h-5" /> Return to Vehicles List
          </button>
        </Link>
      </div>
      <div className="divider"></div>
      <ul className="steps w-full">
        {steps.map((step, i) => (
          <li
            key={`step-${i}`}
            className={`step ${i <= activeStep && "step-primary"}`}
          >
            {step}
          </li>
        ))}
      </ul>
      <div className="divider"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <form onSubmit={(e) => handleOnSubmit(e)} className="w-80">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">VIN</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="btn-group mt-5">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={vin.length === 0 || loading}
            >
              Search
            </button>
          </div>
        </form>
        {activeStep === 4 && (
          <div className="card bg-success text-success-content">
            <div className="card-body">
              <h2 className="card-title">Confirm Check In</h2>
              <p>
                Are the details of the check in complete and accurate? If so,
                enter your name below:
              </p>
              <label className="label">
                <span className="label-text text-black">Attendant</span>
              </label>
              <input
                type="text"
                disabled={loading}
                className="input input-bordered bg-white w-full max-w-xs"
                onChange={(e) => handleAttendantChange(e)}
              />
              <div className="card-actions justify-end">
                <button
                  className="btn"
                  disabled={loading}
                  onClick={() => confirm()}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="divider"></div>
      {loading && <Loading message="Searching for Vehicle..." />}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {!loading && vehicle !== null && (
          <div>
            <h2 className="text-xl font-bold my-5">Vehicle</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-96">
                <tbody>
                  <tr>
                    <th>VIN</th>
                    <td>{vin}</td>
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
            <button
              className="btn btn-primary"
              disabled={activeStep > 1}
              onClick={() => setActiveStep(2)}
            >
              Confirm Vehicle
            </button>
          </div>
        )}
        {activeStep >= 2 && (
          <OwnerDetails
            owner={owner}
            update={setOwner}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
          />
        )}
        {activeStep >= 3 && (
          <FacilityDetails
            facility={facility}
            update={setFacility}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
          />
        )}
      </div>
    </div>
  );
};

export default Add;
