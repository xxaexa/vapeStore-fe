import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store";
import { getUserFromLocalStorage } from "../utils/localStorage";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = getUserFromLocalStorage();
  const sidebar = useAppSelector((state) => state.toggleState.sidebar);

  return (
    <div>
      <div className="hidden md:block">
        <div
          className={`lg:w-52 w-full fixed flex flex-col gap-2 h-screen bg-indigo-400 bg-opacity-40 p-4 `}
        >
          <div className="text-2xl cursor-pointer">
            <Link to={"/dashboard/order"}>ORDER</Link>
          </div>
          <div className="text-2xl cursor-pointer">
            <Link to={user.user.isAdmin ? "/dashboard/product" : "/"}>
              PRODUCT
            </Link>
          </div>
          <div className="text-2xl cursor-pointer ">
            <Link to={"/dashboard/setting"}>SETTING</Link>
          </div>
          <div className="text-2xl cursor-pointer">
            <button
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div
          className={`w-full absolute flex flex-col gap-2 h-screen bg-indigo-300 text-white duration-500 transition-all ease-linear px-8 mt-12 ${
            sidebar ? "right-0" : "right-[422px]"
          }`}
        >
          <div className="text-lg cursor-pointer">
            <Link to={"/dashboard/order"}>ORDER</Link>
          </div>
          <div className="text-lg cursor-pointer">
            <Link to={user.user.isAdmin ? "/dashboard/product" : "/"}>
              PRODUCT
            </Link>
          </div>
          <div className="text-lg cursor-pointer ">
            <Link to={"/dashboard/setting"}>SETTING</Link>
          </div>
          <div className="text-lg cursor-pointer">
            <button
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
