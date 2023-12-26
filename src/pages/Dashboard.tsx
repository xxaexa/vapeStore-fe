import { getUserFromLocalStorage } from "../utils/localStorage";

const Dashboard = () => {
  const user = getUserFromLocalStorage();
  return (
    <div className="lg:ml-64 text-xl max-w-7xl pt-4">
      <h2 className="text-2xl uppercase font-bold border-b-2 border-purple-300">
        Home
      </h2>

      <h2 className="mt-4">Halo {user?.user?.username}</h2>
    </div>
  );
};

export default Dashboard;
