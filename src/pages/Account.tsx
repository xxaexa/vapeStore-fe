import { title } from "../utils/tittle";
import { Sidebar } from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import { toggleSidebar } from "../redux/features/toggleSlice";
import { useDispatch } from "react-redux";
import { ImMenu, ImHome } from "react-icons/im";

const Account = () => {
  title("Account");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg-purple-100 text-black fixed w-full z-50 text-2xl">
        <div className="max-w-7xl mx-auto flex gap-2 py-4 md:py-6 justify-between relative pad-custom">
          <h2 className="text-xl md:text-2xl">VAPE-STORE</h2>
          <div className="flex gap-4">
            <button className="text-2xl" onClick={() => navigate("/")}>
              <ImHome />
            </button>

            <button
              className="text-2xl"
              onClick={() => dispatch(toggleSidebar())}
            >
              <ImMenu />
            </button>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto md:pt-[82px] pad-custom">
        <Sidebar />
        <Outlet />
      </section>
    </div>
  );
};
export default Account;
