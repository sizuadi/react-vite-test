import { Link } from "react-router-dom";

const AuthLayouts = ({ children, title, type }) => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs shadow-inner p-10 rounded-md border">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-3 text-center">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p className="text-sm mt-3 text-center">
        Have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  } else {
    return "";
  }
};

export default AuthLayouts;
