import { Link } from "react-router-dom";
import LargeText from "../text/LargeText";
import { useLocation } from "react-router-dom";
import IconText from "../text/IconText";
import { IoSaveOutline } from "react-icons/io5";
import { getUserFromLocalStorage } from "../../utils";
import { toggleModal } from "../../redux/features/toggleSlice";
import { useDispatch } from "react-redux";

const NavSetting = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = getUserFromLocalStorage();

  return (
    <div className="flex justify-between gap-4 text-underline border-b-[1px]">
      <div className="flex">
        <Link to={"/dashboard/setting"}>
          <LargeText
            text={"Account"}
            style={`px-2 rounded-t-lg duration-500 ease-in-out ${
              location.pathname === "/dashboard/setting"
                ? "text-slate-600 bg-purple-200"
                : ""
            }`}
          />
        </Link>
        {user.user.isAdmin ? (
          <Link to={"/dashboard/setting/theme"}>
            <LargeText
              text={"Theme"}
              style={`px-2 rounded-t-lg duration-500 ease-in-out ${
                location.pathname === "/dashboard/setting/theme"
                  ? "text-slate-600 bg-purple-200"
                  : ""
              }`}
            />
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div
        className="hidden md:flex items-center cursor-pointer"
        onClick={() => dispatch(toggleModal())}
      >
        <IconText icon={<IoSaveOutline />} style={"text-sm md:text-lg"} />
        <LargeText text={"SAVE"} />
      </div>
    </div>
  );
};

export default NavSetting;
