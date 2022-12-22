const OwnerDetails = ({ owner, update, setActiveStep, activeStep }) => {
  const handleOnChange = (event) => {
    update({ ...owner, [event.target.id]: event.target.value });
  };

  return (
    <div>
      <h2 className="text-xl font-bold my-5">Owner</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-96">
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                <input
                  type="text"
                  id="owner"
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
                  id="owner_address"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => handleOnChange(e)}
                />
              </td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>
                <input
                  type="text"
                  id="owner_phone"
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
        disabled={activeStep > 2}
        onClick={() => setActiveStep(3)}
      >
        Confirm Owner
      </button>
    </div>
  );
};

export default OwnerDetails;
