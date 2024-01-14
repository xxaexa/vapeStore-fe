import { getUserFromLocalStorage } from "../../utils/";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  admin: ReactNode;
  member: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ admin, member }) => {
  const user = getUserFromLocalStorage();
  if (user.user.isAdmin) {
    return <>{admin}</>;
  } else {
    // Tampilkan bagian member jika pengguna bukan admin atau tidak ada
    return <>{member}</>;
  }
};

export default ProtectedRoute;
