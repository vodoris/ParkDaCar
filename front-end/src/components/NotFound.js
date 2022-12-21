import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Page Not Found</h1>
          <p class="py-6">Try again later.</p>
          <Link to={`/`}>
            <button class="btn btn-primary">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
