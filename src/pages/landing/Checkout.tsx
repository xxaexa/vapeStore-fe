import { CartTotals, Input, Navbar } from "../../components";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createTitlePage } from "../../utils/";
import { useAppSelector } from "../../redux/store";
import { useCreateOrderMutation } from "../../redux/api/orderApi";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/features/cartSlice";
import { CheckoutState } from "../../types";
import LargeText from "../../components/text/LargeText";
import RegularText from "../../components/text/RegularText";
import { getUserFromLocalStorage } from "../../utils/";
import { setShipping } from "../../redux/features/cartSlice";

const Checkout = () => {
  createTitlePage("Checkout");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = getUserFromLocalStorage();

  const cartState = useAppSelector((state) => state.cartState);

  const [createOrder, { isLoading, isSuccess, error, isError }] =
    useCreateOrderMutation();

  const initialState: CheckoutState = {
    userName: user?.user.username,
    address: "",
    userId: user?.user._id,
    cartTotal: cartState?.cartTotal,
    shipping: cartState?.shipping,
    products: cartState?.cartItems,
    amount: cartState?.numItemsInCart,
    orderTotal: cartState?.orderTotal,
  };

  const [values, setValues] = useState(initialState);

  const handleShipping = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setShipping({ shipping: parseInt(e.currentTarget.value, 10) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createOrder(values);
    console.log(values);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearCart());
      (values.userName = ""), (values.address = "");
      toast.info("Successfully checkout");
      navigate("/dashboard/order");
    } else if (isError) {
      console.log(error);
    }
  }, [isLoading]);

  return (
    <div>
      <Navbar isSidebar={false} />
      <div className="px-4 md:px-0 max-w-7xl mx-auto pt-[46px] md:pt-[66px]">
        <form onSubmit={handleSubmit}>
          <LargeText
            text={"CHECKOUT"}
            style="font-semibold mb-2 border-b-[1px] border-black"
          />

          <div className="mt-6 grid gap-8 md:grid-cols-2 items-start">
            <div className="box-shadow p-4">
              <Input
                label="Address"
                name="address"
                type="text"
                value={values.address}
                handleChange={(e) => {
                  setValues({ ...values, address: e.target.value });
                }}
              />
              <RegularText text={"Shipping"} />
              <select
                onChange={handleShipping}
                className="px-1 text-xs md:text-sm outline-none w-full bg-white border-b-[1px] border-purple-500"
              >
                <option value="0" selected hidden>
                  Choose
                </option>
                <option value="10000">Express</option>
                <option value="20000">Regular</option>
              </select>
            </div>
            <div className="box-shadow p-4 ">
              <CartTotals />
              <div className="flex justify-end md:block mt-2 ">
                <button
                  className="text-lg w-16 size-custom text-green-900 rounded-lg bg-white block ml-auto"
                  onClick={() => navigate("/checkout")}
                >
                  <RegularText
                    text={"PAY"}
                    style="text-lg mt-4 size-custom text-green-400 rounded-lg border- border-green-400 hover:text-white hover:bg-green-400"
                  />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 w-full md:hidden px-4 py-2 box-shadow rounded-t-lg bg-purple-100 flex justify-between">
        <CartTotals />
        <div className="flex justify-end md:block mt-2">
          <button
            className="text-lg w-16 size-custom text-green-900 rounded-lg bg-white "
            onClick={() => navigate("/checkout")}
          >
            <RegularText
              text={"PAY"}
              style="text-lg mt-4 w-[114px] size-custom text-green-400 rounded-lg border-2 border-green-400 hover:text-white hover:bg-green-400"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
