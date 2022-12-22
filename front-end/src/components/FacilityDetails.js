const FacilityDetails = ({ facility, update, setActiveStep, activeStep }) => {
  const handleOnChange = (event) => {
    update({ ...facility, [event.target.id]: event.target.value });
  };

  return (
    <div>
      <h2 className="text-xl font-bold my-5">Facility</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-96">
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                <input
                  type="text"
                  id="facility"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => handleOnChange(e)}
                />
              </td>
            </tr>
            <tr>
              <th>Address</th>
              <td>
                <input
                  type="text"
                  id="facility_address"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => handleOnChange(e)}
                />
              </td>
            </tr>
            <tr>
              <th>Parking Spot</th>
              <td>
                <input
                  type="number"
                  id="facility_parking_spot"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => handleOnChange(e)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-primary"
        disabled={activeStep > 3}
        onClick={() => setActiveStep(4)}
      >
        Confirm Facility
      </button>
    </div>
  );
};

export default FacilityDetails;
