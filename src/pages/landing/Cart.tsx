import { ItemCart, Navbar, CartTotals } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { getUserFromLocalStorage, createTitlePage } from "../../utils/";
import { useAppSelector } from "../../redux/store";
import { toggleFalse } from "./../../redux/features/toggleSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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
    <div>
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
        <div className="w-10/12 lg:w-8/12 mx-auto pt-4">
          {cartState?.cartItems?.length === 0 ? (
            <div className="mt-24">
              <p className="text-center text-2xl uppercase">cart is empty</p>
              <Link to={"/"}>
                <button className="mt-12 mx-auto block text-2xl uppercase bg-purple-300 px-4 py-1 rounded-lg hover:text-white duration-300 ease-out">
                  Add Some Product
                </button>
              </Link>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-12 border-b-2 border-black">
                CART
              </h2>
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
                      CHECKOUT
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
