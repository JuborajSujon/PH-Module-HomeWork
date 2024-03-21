import { useRouteError, Link } from "react-router-dom";

const ErrorNotFound = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold text-center ">Opps!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <i className="text-xl font-bold">{error.statusText || error.message}</i>
      <p>Go back where you from</p>
      <button className="btn btn-primary">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default ErrorNotFound;
