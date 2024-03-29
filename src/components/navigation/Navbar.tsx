import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/features/toggleSlice";
import { IoBagHandleOutline, IoMenuOutline } from "react-icons/io5";
import { NavbarProps } from "../../types";
import Menu from "./Menu";
import { BiHome } from "react-icons/bi";
import LargeText from "../text/LargeText";
import menu from "./../../assets/icons/menu.png";

const Navbar = ({ isSidebar }: NavbarProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <nav className="bg-purple-100 text-black fixed w-full z-10 text-2xl">
      <ul className="max-w-7xl mx-auto flex gap-2 py-2 md:py-4 justify-between items-center relative pad-custom">
        {isSidebar ? (
          <LargeText text={"Dashboard"} style="font-bold uppercase" />
        ) : (
          <LargeText text={"VAPE-STORE"} style="font-bold uppercase" />
        )}
        <div className="flex items-center gap-3">
          <button
            className="text-2xl"
            onClick={() => {
              setShowCart(!showCart);
              navigate("/cart");
            }}
          >
            <IoBagHandleOutline />
          </button>

          {isSidebar ? (
            <>
              <button onClick={() => navigate("/")}>
                <BiHome />
              </button>
              <button
                className="text-2xl md:hidden"
                onClick={() => {
                  dispatch(toggleSidebar());
                }}
              >
                <IoMenuOutline />
              </button>
            </>
          ) : (
            <button onClick={() => navigate("/dashboard")}>
              <img src={menu} alt="" className="w-[20px]" />
            </button>
          )}
        </div>
      </ul>
      <Menu />
    </nav>
  );
};

export default Navbar;
