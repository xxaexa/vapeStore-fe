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
import { formatPrice } from "../../utils/";

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
    values.shipping = parseInt(e.currentTarget.value, 10);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (values.address === "") {
      toast.error("Input Address ");
    } else if (values.shipping === 0) {
      toast.error("Choose shipping");
    } else {
      createOrder(values);
    }
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
            <div className="mt-6 md:hidden grid gap-8 grid-cols-1 items-start">
              <div className="box-shadow p-4">
                <RegularText text={"Product"} />
                {cartState?.cartItems?.map((product) => (
                  <div className="flex flex-row justify-between my-4 border-[1px] border-purple-400 rounded-lg p-2">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-[120px]"
                    />
                    <div className="flex flex-col justify-between">
                      <RegularText text={product.title} style="text-right" />
                      <RegularText
                        text={formatPrice(product.price)}
                        style="text-right"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" box-shadow p-4 ">
              <CartTotals />
              <div className="flex justify-end md:block mt-2 ">
                <button
                  className="hidden md:block w-16 size-custom box-shadow bg-white  ml-auto text-lg mt-4 size-custom text-green-400 rounded-lg border- border-green-400 hover:text-white hover:bg-green-400"
                  onClick={() => navigate("/checkout")}
                >
                  <RegularText text={"PAY"} />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 hidden md:grid gap-8 grid-cols-2  items-start">
            <div className="box-shadow p-4">
              <RegularText text={"Product"} />
              {cartState?.cartItems?.map((product) => (
                <div className="flex flex-row justify-between my-4 border-[1px] border-purple-400 rounded-lg p-2">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-[120px]"
                  />
                  <div className="flex flex-col justify-between">
                    <RegularText text={product.title} style="text-right" />
                    <RegularText
                      text={formatPrice(product.price)}
                      style="text-right"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 w-full md:hidden px-4 py-2 box-shadow rounded-t-lg bg-purple-100 flex justify-between">
        <CartTotals isBottomComp={true} isCheckoutPage={true} />
        <div className="flex items-center">
          <button
            className="text-lg w-16 size-custom text-green-400 rounded-lg bg-white "
            onClick={() => navigate("/checkout")}
          >
            <RegularText text={"PAY"} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
