import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getUserFromLocalStorage } from "../../utils";
import { logout } from "./../../redux/features/userSlice";
import { PiPackageThin } from "react-icons/pi";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import LargeText from "../text/LargeText";
import IconText from "../text/IconText";

const Menu = () => {
  const sidebar = useAppSelector((state) => state.toggleState.sidebar);
  const dispatch = useDispatch();
  const user = getUserFromLocalStorage();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  return (
    <div className="md:hidden">
      <div
        className={`w-full absolute flex flex-col gap-2 h-screen bg-purple-100 text-black duration-500 transition-all ease-linear pl-4 pt-2  ${
          sidebar ? "right-0" : "right-[922px]"
        }`}
      >
        <div
          className={`sidebar-text duration-500 ease-in-out ${
            location.pathname === "/dashboard/order"
              ? "bg-white px-4 rounded-l-lg"
              : "bg-purple-100"
          }`}
          onClick={() => navigate("/dashboard/order")}
        >
          <IconText icon={<CiViewTable />} />
          <LargeText text={"Order"} />
        </div>
        <div
          className={`sidebar-text duration-500 ease-in-out ${
            location.pathname === "/dashboard/product" ||
            location.pathname === "/dashboard/product/add" ||
            location.pathname === `/dashboard/product/edit/${id}`
              ? "bg-white px-4 rounded-l-lg"
              : "bg-purple-100"
          }`}
          onClick={() =>
            navigate(`${user.user?.isAdmin ? "/dashboard/product" : "/"}`)
          }
        >
          <IconText icon={<PiPackageThin />} />
          <LargeText text={"Product"} />
        </div>
        <div
          className={`sidebar-text duration-500 ease-in-out ${
            location.pathname === "/dashboard/setting" ||
            location.pathname === "/dashboard/setting/theme"
              ? "bg-white px-4 rounded-l-lg"
              : "bg-purple-100"
          }`}
          onClick={() => navigate("/dashboard/setting")}
        >
          <IconText icon={<IoSettingsOutline />} />
          <LargeText text={"Setting"} />
        </div>
        <div
          className="sidebar-text"
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
        >
          <IconText icon={<IoLogOutOutline />} />
          <LargeText text={"Logout"} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
