import { ArrowPathIcon } from "@heroicons/react/24/solid";
const Loading = ({ message }) => {
  return (
    <div className="alert w-96 alert-info shadow-lg">
      <div>
        <ArrowPathIcon className="w-5 h-5" />
        <span>{message}</span>
      </div>
    </div>
  );
};
export default Loading;
