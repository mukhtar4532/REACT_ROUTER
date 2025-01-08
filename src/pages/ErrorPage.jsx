import { useNavigate, useRouteError } from "react-router-dom";

import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
    // navigate("/");
  };

  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mt-2 text-center">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        {/* <NavLink
          to="/"
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600">
          Back to Home
        </NavLink> */}
        <button
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
          onClick={handleGoBack}>
          Go to previous page
        </button>
      </div>
    );
  }
  return <p>The page you are looking doesn’t exist.</p>;
};
