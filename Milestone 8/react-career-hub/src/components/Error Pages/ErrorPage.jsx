import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-center text-3xl">Opps!!</h2>
      <Link className="btn " to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
