import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Add = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-5xl font-bold">Add New Vehicle</h1>
        <Link to={`/`}>
          <button className="btn btn-primary btn-accent gap-2">
            <ArrowLeftIcon className="w-5 h-5" /> Return to Vehicles List
          </button>
        </Link>
      </div>
      <div className="divider"></div>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">VIN</span>
          </label>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </div>
      </form>
    </div>
  );
};

export default Add;
