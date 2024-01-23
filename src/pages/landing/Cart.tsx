import { ItemCart, Navbar, CartTotals } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { createTitlePage } from "../../utils/";
import { useAppSelector } from "../../redux/store";
import { toggleFalse } from "./../../redux/features/toggleSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LargeText from "../../components/text/LargeText";
import RegularText from "../../components/text/RegularText";
import { resetShipping } from "../../redux/features/cartSlice";

const Cart = () => {
  createTitlePage("Cart");
  const cartState = useAppSelector((state) => state.cartState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleFalse());
    dispatch(resetShipping());
  }, []);

  return (
    <div className="">
      <Navbar isSidebar={false} />
      {
        <div className="px-4 md:px-0 max-w-7xl mx-auto pt-[46px] md:pt-[66px]">
          {cartState?.cartItems?.length === 0 ? (
            <div className="mt-24">
              <RegularText text={"cart is empty"} style="text-center" />
              <Link to={"/"}>
                <button className="mt-12 mx-auto block uppercase bg-purple-300 px-4 py-1 rounded-lg hover:text-white duration-300 ease-out">
                  <RegularText text={" Add Some Product"} />
                </button>
              </Link>
            </div>
          ) : (
            <>
              <LargeText
                text={"CART"}
                style="font-semibold border-b-[1px] border-black"
              />
              <div className="flex gap-12 flex-col md:flex-row relative">
                <div className="md:w-3/5">
                  {cartState?.cartItems?.map((c, index) => (
                    <ItemCart key={index} {...c} />
                  ))}
                </div>
                <div className="hidden md:flex lg:w-2/5 h-fit p-4 box-shadow rounded-lg mt-6 flex-col">
                  <CartTotals isBottomComp={true} />
                  <div className="flex justify-end ">
                    <button
                      className="text-lg mt-4 w-[114px] size-custom text-green-400 rounded-lg border-2 border-green-400 hover:text-white hover:bg-green-400"
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
      }

      <div className="fixed bottom-0 w-full md:hidden px-4 py-2 box-shadow rounded-t-lg bg-purple-100 flex justify-between">
        <CartTotals isCartPage={true} isBottomComp={true} />
        <div className="flex justify-end md:block mt-2">
          <button
            className="text-lg w-16 size-custom text-green-900 rounded-lg bg-white "
            onClick={() => navigate("/checkout")}
          >
            <RegularText text={"Checkout"} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
