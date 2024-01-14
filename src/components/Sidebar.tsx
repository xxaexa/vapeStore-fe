import { useNavigate } from "react-router-dom";
import { logout } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";
import { getUserFromLocalStorage } from "../utils/";
import { PiPackageThin } from "react-icons/pi";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import LargeText from "./text/LargeText";
import IconText from "./text/IconText";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const user = getUserFromLocalStorage();

  return (
    <div>
      <div className="hidden md:block">
        <div
          className={`lg:w-52 w-full fixed flex flex-col gap-2 h-screen bg-purple-100 py-4 pl-4`}
        >
          <div
            className={`sidebar-text duration-500 ease-in-out ${
              location.pathname === "/dashboard/order" ||
              location.pathname === `/dashboard/order/${id}`
                ? "bg-white px-4 rounded-l-lg"
                : "bg-purple-100"
            }`}
            onClick={() => navigate("/dashboard/order")}
          >
            <IconText icon={<CiViewTable />} />
            <LargeText text={"Order"} />
          </div>
          {user.user.isAdmin ? (
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
          ) : (
            <></>
          )}
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
    </div>
  );
};
export default Sidebar;
