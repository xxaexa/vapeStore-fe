import { Link } from "react-router-dom";
import SearchIcon from "./../assets/icons/search.svg?react";
import Bag from "./../assets/icons/bag.svg?react";
import Account from "./../assets/icons/account.svg?react";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <nav className="bg-purple-100 text-black fixed w-full z-50 text-2xl">
      <ul className="max-w-7xl mx-auto flex gap-2 py-4 md:py-6 justify-between relative pad-custom">
        <li className="cursor-pointer" onClick={() => setShow(!show)}>
          <SearchIcon className="w-6 md:w-8" />
        </li>

        <div
          className={`absolute  bg-red-200 ease-in-out duration-500 rounded-xl ${
            show ? "left-0" : "left-[-3000px]"
          }`}
        >
          <input
            type="text"
            placeholder="Search Product"
            className="px-2 py-1 outline-none"
          />
          <button onClick={() => setShow(false)} className="px-4">
            X
          </button>
        </div>

        <li className="flex gap-4">
          <Link to={"/cart"}>
            <li
              className="cursor-pointer relative"
              onClick={() => setShowCart(!showCart)}
            >
              <Bag className="w-6 md:w-8 text-black" />
            </li>
          </Link>

          <Link to={"/dashboard/order"}>
            <li className="cursor-pointer">
              <Account className="w-6 md:w-8 text-black" />
            </li>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
