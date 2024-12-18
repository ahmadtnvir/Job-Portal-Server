import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/signIn"}></Navigate>;
};

export default PrivateRoute;
