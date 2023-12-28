import { Link } from "react-router-dom";
import Bag from "./../assets/icons/bag.svg?react";
import Account from "./../assets/icons/account.svg?react";
import { useState } from "react";

const Navbar = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <nav className="bg-purple-100 text-black fixed w-full z-50 text-2xl">
      <ul className="max-w-7xl mx-auto flex gap-2 py-4 md:py-6 justify-between relative pad-custom">
        <div>VAPE-STORE</div>

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
