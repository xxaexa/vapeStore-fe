import { Navigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils/";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = getUserFromLocalStorage();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>; // Use React.Fragment or a wrapper div if necessary
};

export default ProtectedRoute;
