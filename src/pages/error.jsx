import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occured</p>
      <p>{error.statusText || error.message}</p>
      <Link to="/" className="mt-5 bg-blue-500 text-white px-4 py-2">
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
