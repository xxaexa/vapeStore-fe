import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="lg:w-52 lg:absolute flex flex-row lg:flex-col gap-2">
      <div className="text-2xl cursor-pointer ">
        <Link to={"/account"}>ACCOUNT</Link>
      </div>
      <div className="text-2xl cursor-pointer">
        <Link to={"/account/order"}>ORDER</Link>
      </div>
      <div className="text-2xl cursor-pointer">
        <Link to={"/"}>PRODUCT</Link>
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
  );
};
export default Sidebar;
