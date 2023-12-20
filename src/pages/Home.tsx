import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="py-32">
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
