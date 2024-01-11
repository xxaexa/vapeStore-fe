import { getUserFromLocalStorage } from "../../utils/";
import { DashCont, HeaderDashboard } from "../../components";

const Dashboard = () => {
  const user = getUserFromLocalStorage();
  return (
    <DashCont>
      <HeaderDashboard text="HOme" />

      <h2 className="mt-4">Halo {user?.user?.username}</h2>
    </DashCont>
  );
};

export default Dashboard;
