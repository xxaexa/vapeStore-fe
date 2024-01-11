import { ItemCart, Navbar, CartTotals } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { getUserFromLocalStorage, createTitlePage } from "../../utils/";
import { useAppSelector } from "../../redux/store";
import { toggleFalse } from "./../../redux/features/toggleSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LargeText from "../../components/text/LargeText";
import RegularText from "../../components/text/RegularText";

const Cart = () => {
  createTitlePage("Cart");
  const cartState = useAppSelector((state) => state.cartState);
  const user = getUserFromLocalStorage();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleFalse());
  }, []);

  return (
    <div className="">
      <Navbar isSidebar={false} />
      {!user ? (
        <div className="mt-24">
          <p className="text-2xl text-center">
            You are not logged in, please login
          </p>
          <button
            className="mx-auto block px-2 py-1 rounded-lg bg-purple-700 text-white text-2xl mt-8"
            onClick={() => navigate("/login")}
          >
            LOGIN
          </button>
        </div>
      ) : (
        <div className="px-4 md:px-0 max-w-7xl mx-auto pt-[46px] md:pt-[66px]">
          {cartState?.cartItems?.length === 0 ? (
            <div className="mt-24">
              <RegularText text={"cart is empty"} />
              <Link to={"/"}>
                <button className="mt-12 mx-auto blockuppercase bg-purple-300 px-4 py-1 rounded-lg hover:text-white duration-300 ease-out">
                  <RegularText text={" Add Some Product"} />
                </button>
              </Link>
            </div>
          ) : (
            <>
              <LargeText
                text={"CART"}
                style="font-semibold mb-4 border-b-[1px] border-black"
              />

              <div className="flex gap-12 flex-col lg:flex-row">
                <div className="lg:w-3/5 p-4 box-shadow ">
                  {cartState?.cartItems?.map((c, index) => (
                    <ItemCart key={index} {...c} />
                  ))}
                </div>
                <div className="lg:w-2/5 h-[260px] p-4 box-shadow rounded-lg">
                  <CartTotals isCartPage={true} />
                  <div className="flex justify-end md:block">
                    <button
                      className="text-lg mt-4 w-[114px] md:w-32 size-custom text-green-400 rounded-lg border-2 border-green-400 hover:text-white hover:bg-green-400"
                      onClick={() => navigate("/checkout")}
                    >
                      <RegularText text={"Checkout"} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default Cart;
