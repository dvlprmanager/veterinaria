import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const APrivateRoutes = () => {
  // const role = useSelector((state) => state.user.role);
  const role = "admin"
  return role === "admin" ? <Outlet /> : <Navigate to="/" />;
};

export const DPrivateRoutes = () => {
  // const role = useSelector((state) => state.user.role);`
  const role = "doctor"
  return role === "doctor" ? <Outlet /> : <Navigate to="/" />;
};
