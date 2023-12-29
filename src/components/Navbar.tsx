import { Link } from "react-router-dom";
import { useState } from "react";
import { ImMenu, ImCart } from "react-icons/im";

const Navbar = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <nav className="bg-purple-100 text-black fixed w-full z-50 text-2xl">
      <ul className="max-w-7xl mx-auto flex gap-2 py-4 md:py-6 justify-between relative pad-custom">
        <h2 className="text-xl md:text-2xl">VAPE-STORE</h2>

        <li className="flex gap-4">
          <Link to={"/cart"}>
            <li
              className="cursor-pointer relative"
              onClick={() => setShowCart(!showCart)}
            >
              <ImCart />
            </li>
          </Link>

          <Link to={"/dashboard/order"}>
            <li className="cursor-pointer">
              <ImMenu />
            </li>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
