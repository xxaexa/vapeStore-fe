import { title } from "../utils/tittle";
import { Sidebar } from "../components";
import { Outlet } from "react-router-dom";
import { toggleSidebar } from "../redux/features/toggleSlice";
import { useDispatch } from "react-redux";
import menu from "./../assets/icons/bars.svg";

const Account = () => {
  title("Account");
  const dispatch = useDispatch();

  return (
    <div>
      <div className="md:hidden fixed  flex justify-between bg-indigo-300 text-white px-8 py-2  w-full">
        <h2 className="text-xl md:text-2xl">Vape-Store</h2>
        <button className="text-2xl" onClick={() => dispatch(toggleSidebar())}>
          <img src={menu} alt="menu" className="w-8 text-white" />
        </button>
      </div>
      <section className="w-10/12 lg:w-8/12 mx-auto">
        <Sidebar />

        <Outlet />
      </section>
    </div>
  );
};
export default Account;
